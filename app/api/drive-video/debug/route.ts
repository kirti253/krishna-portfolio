import { NextResponse } from "next/server";
import { getDriveClient } from "@/lib/drive-server";

/**
 * Debug endpoint: test if Drive video access works.
 * GET /api/drive-video/debug?id=FILE_ID
 * Returns metadata and a small test fetch to verify the setup.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id || id === "YOUR_VIDEO_ID") {
    return NextResponse.json(
      {
        error: id === "YOUR_VIDEO_ID"
          ? "Replace YOUR_VIDEO_ID with a real ID from /api/drive-videos"
          : "Add ?id=FILE_ID (use an ID from /api/drive-videos)",
        example: "http://localhost:3000/api/drive-video/debug?id=101IwR9hjb20WBsHrquwqD8GGrEwxuq7y",
      },
      { status: 400 }
    );
  }

  try {
    const drive = await getDriveClient();
    const metaRes = await drive.files.get({
      fileId: id,
      fields: "id, name, mimeType, size",
      supportsAllDrives: true,
    });
    const meta = metaRes.data as { id?: string; name?: string; mimeType?: string; size?: string };

    const downloadRes = await drive.files.get(
      { fileId: id, alt: "media", supportsAllDrives: true },
      { responseType: "arraybuffer", headers: { Range: "bytes=0-1023" } }
    );
    const buffer = downloadRes.data as ArrayBuffer;
    const bytesReceived = buffer?.byteLength ?? 0;

    return NextResponse.json({
      ok: true,
      message: "Drive access works",
      file: {
        id: meta.id,
        name: meta.name,
        mimeType: meta.mimeType,
        size: meta.size,
      },
      testFetch: {
        bytesReceived,
        status: bytesReceived > 0 ? "OK" : "No data",
      },
    });
  } catch (e) {
    console.error("Drive debug error:", e);
    const err = e as { message?: string; code?: number; response?: { status?: number } };
    const msg = err?.message ?? String(e);
    const code = err?.code ?? err?.response?.status;

    return NextResponse.json(
      {
        ok: false,
        error: msg,
        code,
        steps: [
          "1. Open your folder in Drive (URL: drive.google.com/drive/folders/YOUR_FOLDER_ID)",
          "2. Click Share → Add people",
          "3. Add your service account email (from the JSON file, client_email) as Viewer",
          "4. If folder is in a Shared Drive: Shared drive → Manage members → Add the service account",
        ],
      },
      { status: 500 }
    );
  }
}
