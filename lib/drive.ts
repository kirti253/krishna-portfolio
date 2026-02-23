/**
 * Google Drive video item returned by the API.
 * embedUrl is used in iframe src for playback.
 */
export type DriveVideo = {
  id: string;
  name: string;
  embedUrl: string;
  thumbnailUrl?: string;
};

export function getEmbedUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
