type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.06] px-6 py-[18px] text-[15px] font-medium tracking-[-0.01em] text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-[2px] hover:border-white/25 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 active:duration-100 motion-reduce:transform-none motion-reduce:transition-none"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* 호버 시에만 옅게 지나가는 쿨톤 광택 */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="relative">{title}</span>
    </a>
  );
}
