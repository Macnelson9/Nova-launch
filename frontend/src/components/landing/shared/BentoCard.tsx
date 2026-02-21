interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
}

export function BentoCard({ title, description, className = "" }: BentoCardProps) {
  return (
    <article className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}
