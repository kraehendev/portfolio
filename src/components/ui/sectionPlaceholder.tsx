type SectionPlaceholderProps = {
  minHeight?: string;
};

/** Reserves space while a below-fold section chunk loads. */
export default function SectionPlaceholder({
  minHeight = '40vh',
}: SectionPlaceholderProps) {
  return (
    <div
      className="w-full"
      style={{ minHeight }}
      aria-hidden
    />
  );
}
