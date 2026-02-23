"use client";

import { useState, useEffect, useRef } from "react";
import type { DriveVideo } from "@/lib/drive";

type Props = {
  video: DriveVideo;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  /** When provided, video plays when true and pauses when false (e.g. when section scrolls into view). */
  inView?: boolean;
  /** Delay in ms before loading this video (stagger requests to avoid overwhelming the API). */
  loadDelay?: number;
};

/**
 * Streams video from Google Drive via our API. Shows thumbnail while loading, falls back to iframe if stream fails.
 */
export function DriveVideoPlayer({
  video,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  inView,
  loadDelay = 0,
}: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const [canLoad, setCanLoad] = useState(loadDelay === 0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stagger loading: wait loadDelay ms before allowing this video to load
  useEffect(() => {
    if (loadDelay === 0) {
      setCanLoad(true);
      return;
    }
    const t = setTimeout(() => setCanLoad(true), loadDelay);
    return () => clearTimeout(t);
  }, [loadDelay]);

  const shouldLoad = canLoad && (inView === undefined || inView === true);

  // Fallback: switch to iframe if stream doesn't load within 3s
  useEffect(() => {
    if (useFallback || !shouldLoad) return;
    const t = setTimeout(() => {
      const el = videoRef.current;
      if (el && el.readyState < 2) setUseFallback(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [useFallback, video.id, shouldLoad]);

  // Play when inView, pause when out (native video only)
  useEffect(() => {
    if (inView === undefined || useFallback) return;
    const el = videoRef.current;
    if (!el) return;

    const play = () => {
      el.muted = true;
      el.play().catch(() => {});
    };

    if (inView) {
      if (el.readyState >= 2) {
        play();
      } else {
        const onCanPlay = () => {
          play();
          el.removeEventListener("canplay", onCanPlay);
        };
        el.addEventListener("canplay", onCanPlay);
        return () => el.removeEventListener("canplay", onCanPlay);
      }
    } else {
      el.pause();
    }
  }, [inView, useFallback]);

  const shouldAutoPlay = inView === undefined ? autoPlay : false;

  // When stream fails: show placeholder instead of iframe (iframe causes 403, thumbnails cause 429)
  if (useFallback) {
    return (
      <a
        href={video.embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </a>
    );
  }

  const Placeholder = () => (
    <div
      className={className}
      style={{
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  if (inView === false) return <Placeholder />;
  if (!shouldLoad) return <Placeholder />;

  return (
    <video
      ref={videoRef}
      src={video.streamUrl}
      className={className}
      autoPlay={shouldAutoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      title={video.name}
      preload="auto"
      onError={() => setUseFallback(true)}
    />
  );
}
