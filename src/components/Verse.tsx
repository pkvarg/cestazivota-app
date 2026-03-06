interface VerseProps {
  text: string;
  reference: string;
}

export default function Verse({ text, reference }: VerseProps) {
  return (
    <blockquote className="my-4 pl-4 border-l-4 border-yellow-400/50">
      <p className="verse text-lg leading-relaxed">{text}</p>
      <cite className="verse-ref block mt-1">{reference}</cite>
    </blockquote>
  );
}
