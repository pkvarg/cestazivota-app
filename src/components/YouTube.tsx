interface YouTubeProps {
  videoId: string;
  title?: string;
}

export default function YouTube({ videoId, title = 'Video' }: YouTubeProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
