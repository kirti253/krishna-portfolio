/**
 * Google Drive video item returned by the API.
 * streamUrl is used with <video> for autoplay/loop; embedUrl for iframe fallback.
 */
export type DriveVideo = {
  id: string;
  name: string;
  embedUrl: string;
  streamUrl: string;
  thumbnailUrl?: string;
};

export function getEmbedUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function getStreamUrl(fileId: string): string {
  return `/api/drive-video?id=${encodeURIComponent(fileId)}`;
}
