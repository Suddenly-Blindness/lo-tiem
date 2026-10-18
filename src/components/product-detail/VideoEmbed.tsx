import type { InstallVideo } from "@/types";

export function VideoEmbed({ video, title }: { video: InstallVideo; title: string }) {
  if (video.type === "file") {
    return <video src={video.src} controls preload="metadata" className="w-full bg-ink" />;
  }
  // TikTok là video dọc, YouTube là video ngang
  const vertical = video.type === "tiktok";
  const src =
    video.type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.src}`
      : `https://www.tiktok.com/embed/v2/${video.src}`;
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      allowFullScreen
      allow="encrypted-media; picture-in-picture"
      className={vertical ? "mx-auto aspect-[9/16] w-full max-w-sm border-0" : "aspect-video w-full border-0"}
    />
  );
}
