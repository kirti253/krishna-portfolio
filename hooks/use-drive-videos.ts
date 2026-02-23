"use client";

import { useState, useEffect } from "react";
import type { DriveVideo } from "@/lib/drive";

export function useDriveVideos(): {
  videos: DriveVideo[];
  loading: boolean;
  error: string | null;
} {
  const [videos, setVideos] = useState<DriveVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch("/api/drive-videos")
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          const msg = typeof data?.error === "string" ? data.error : data?.details ?? "Failed to load videos";
          throw new Error(msg);
        }
        return data as DriveVideo[];
      })
      .then((data) => {
        if (!cancelled) setVideos(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load videos");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { videos, loading, error };
}
