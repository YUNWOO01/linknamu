type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      className="flex w-full items-center justify-center rounded-2xl border border-black/10 px-5 py-4 text-base font-medium transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
