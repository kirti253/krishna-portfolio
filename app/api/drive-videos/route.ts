import { NextResponse } from "next/server";
import { getEmbedUrl, type DriveVideo } from "@/lib/drive";

const VIDEO_MIME_PREFIX = "video/";

/**
 * Fetch videos from Google Drive.
 * Supports two modes:
 * 1. Drive API: set GOOGLE_DRIVE_FOLDER_ID + GOOGLE_SERVICE_ACCOUNT_JSON (folder must be shared with service account)
 * 2. Simple list: set NEXT_PUBLIC_DRIVE_VIDEO_IDS=id1,id2,id3 (each video must be "Anyone with link can view")
 */
export async function GET() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const saJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const videoIdsEnv = process.env.NEXT_PUBLIC_DRIVE_VIDEO_IDS;

  // Simple mode: comma-separated video IDs (no API key needed)
  if (videoIdsEnv?.trim()) {
    const ids = videoIdsEnv.split(",").map((id) => id.trim()).filter(Boolean);
    const videos: DriveVideo[] = ids.map((id) => ({
      id,
      name: `Video ${id.slice(0, 8)}`,
      embedUrl: getEmbedUrl(id),
    }));
    return NextResponse.json(videos);
  }

  // Drive API mode: list videos from folder
  if (folderId && saJson) {
    try {
      const key = JSON.parse(saJson) as {
        client_email?: string;
        private_key?: string;
      };
      if (!key.client_email || !key.private_key) {
        return NextResponse.json(
          { error: "Invalid GOOGLE_SERVICE_ACCOUNT_JSON" },
          { status: 500 }
        );
      }

      const { google } = await import("googleapis");
      const auth = new google.auth.GoogleAuth({
        credentials: key,
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      });
      const drive = google.drive({ version: "v3", auth });

      const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false and mimeType contains '${VIDEO_MIME_PREFIX}'`,
        fields: "files(id, name, thumbnailLink)",
        orderBy: "name",
        pageSize: 100,
      });

      const files = res.data.files ?? [];
      const videos: DriveVideo[] = (files as { id?: string; name?: string; thumbnailLink?: string }[])
        .filter((f) => f.id)
        .map((f) => ({
          id: f.id!,
          name: f.name ?? "Untitled",
          embedUrl: getEmbedUrl(f.id!),
          thumbnailUrl: f.thumbnailLink ?? undefined,
        }));

      return NextResponse.json(videos);
    } catch (e) {
      console.error("Drive API error:", e);
      return NextResponse.json(
        { error: "Failed to fetch from Google Drive", details: String(e) },
        { status: 500 }
      );
    }
  }

  // No config: return empty so UI can show placeholder or message
  return NextResponse.json([]);
}
