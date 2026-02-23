import { NextResponse } from "next/server";
import { getDriveClient } from "@/lib/drive-server";

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB - use buffered download

/**
 * Stream/download a single video from Google Drive by file ID.
 * Uses buffered download for reliability (supports Range for seeking).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  try {
    const drive = await getDriveClient();
    const range = request.headers.get("range");

    const metaRes = await drive.files.get({
      fileId: id,
      fields: "mimeType, size",
      supportsAllDrives: true,
    });
    const meta = metaRes.data as { mimeType?: string; size?: string };
    const mimeType = meta.mimeType?.startsWith("video/") ? meta.mimeType : "video/mp4";
    const fileSize = meta.size ? parseInt(meta.size, 10) : 0;

    if (fileSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Video too large", maxSize: MAX_FILE_SIZE },
        { status: 413 }
      );
    }

    const requestConfig: { responseType: "arraybuffer"; headers?: Record<string, string> } = {
      responseType: "arraybuffer",
    };
    if (range) requestConfig.headers = { Range: range };

    const downloadRes = await drive.files.get(
      { fileId: id, alt: "media", supportsAllDrives: true },
      requestConfig
    );
    const buffer = downloadRes.data as ArrayBuffer;
    const res = downloadRes as { headers?: Record<string, string>; status?: number };
    const resHeaders = res.headers ?? {};

    const headers: Record<string, string> = {
      "Content-Type": mimeType,
      "Cache-Control": "public, max-age=3600",
      "Accept-Ranges": "bytes",
    };

    if (range) {
      const contentRange = resHeaders["content-range"];
      const contentLength = resHeaders["content-length"];
      if (contentRange) headers["Content-Range"] = contentRange;
      if (contentLength) headers["Content-Length"] = contentLength;
    } else if (buffer && buffer.byteLength) {
      headers["Content-Length"] = String(buffer.byteLength);
    }

    const status = range ? (res.status ?? 206) : 200;
    return new NextResponse(buffer, { headers, status });
  } catch (e) {
    console.error("Drive video error:", e);
    return NextResponse.json(
      { error: "Failed to load video", details: String(e) },
      { status: 500 }
    );
  }
}
