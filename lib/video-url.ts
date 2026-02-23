const RAW_BASE = process.env.NEXT_PUBLIC_VIDEO_BASE_URL ?? ""

const VIDEO_BASE_URL = RAW_BASE.replace(/\/+$/, "")

export function videoUrl(pathOrKey: string) {
  if (!pathOrKey) return pathOrKey

  // Accept "/videos/foo.mp4" or "videos/foo.mp4" or "foo.mp4"
  const cleaned = pathOrKey.replace(/^\/+/, "")
  const relative = cleaned.startsWith("videos/") ? cleaned : `videos/${cleaned}`

  // Local fallback (keep files in public/videos locally if desired)
  if (!VIDEO_BASE_URL) return `/${relative}`

  // Ensure spaces etc. don't break the URL
  return encodeURI(`${VIDEO_BASE_URL}/${relative}`)
}

