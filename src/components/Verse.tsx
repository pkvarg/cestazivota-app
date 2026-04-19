interface VerseProps {
  text: string;
  reference: string;
}

export default function Verse({ text, reference }: VerseProps) {
  return (
    <span className="verse-wrap">
      <span className="verse">{text}</span>
      <cite className="verse-ref">{reference}</cite>
    </span>
  );
}
