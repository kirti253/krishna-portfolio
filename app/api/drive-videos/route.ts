import { NextResponse } from "next/server";
import { getEmbedUrl, getStreamUrl, type DriveVideo } from "@/lib/drive";
import { getDriveClient } from "@/lib/drive-server";

const VIDEO_MIME_PREFIX = "video/";

/**
 * Fetch all videos from your main Google Drive folder.
 * Set GOOGLE_DRIVE_FOLDER_ID + either GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_PATH (path to JSON file).
 * Share that folder with the service account email as Viewer.
 */
export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();

  if (!folderId) {
    return NextResponse.json(
      { error: "Set GOOGLE_DRIVE_FOLDER_ID in .env.local" },
      { status: 400 }
    );
  }

  try {
    const drive = await getDriveClient();

    const allFiles: { id?: string; name?: string; thumbnailLink?: string }[] = [];
    let pageToken: string | undefined;

    do {
      const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false and mimeType contains '${VIDEO_MIME_PREFIX}'`,
        fields: "nextPageToken, files(id, name, thumbnailLink)",
        orderBy: "name",
        pageSize: 100,
        pageToken,
        supportsAllDrives: true,
      });

      const files = (res.data.files ?? []) as { id?: string; name?: string; thumbnailLink?: string }[];
      allFiles.push(...files);
      pageToken = res.data.nextPageToken ?? undefined;
    } while (pageToken);

    const videos: DriveVideo[] = allFiles
      .filter((f) => f.id)
      .map((f) => ({
        id: f.id!,
        name: f.name ?? "Untitled",
        embedUrl: getEmbedUrl(f.id!),
        streamUrl: getStreamUrl(f.id!),
        thumbnailUrl: f.thumbnailLink ?? undefined,
      }));

    return NextResponse.json(videos);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "";
    if (msg.includes("GOOGLE_SERVICE_ACCOUNT") || msg.includes("GOOGLE_DRIVE_FOLDER")) {
      return NextResponse.json({ error: msg }, { status: 400 });
    }
    console.error("Drive API error:", e);
    return NextResponse.json(
      { error: "Failed to fetch from Google Drive", details: String(e) },
      { status: 500 }
    );
  }
}
