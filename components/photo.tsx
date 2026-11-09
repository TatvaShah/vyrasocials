import Image from "next/image";
import type { Img } from "@/lib/content";

// Fills its parent. The parent sets size and aspect ratio.
export function Photo({ img, sizes, priority, className = "" }: { img: Img; sizes: string; priority?: boolean; className?: string }) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes}
      preload={priority}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? "eager" : "lazy"}
      className={`object-cover ${className}`}
    />
  );
}
