interface ShowcaseCardProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
}

export function ShowcaseCard({
  src,
  alt,
  label,
  className = "",
}: ShowcaseCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl aspect-[4/5] min-w-[260px] snap-start ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={400}
        height={500}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 text-sm font-semibold text-brand-white">
        {label}
      </span>
    </div>
  );
}
