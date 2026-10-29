import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center">
      {/* 바깥 링 + 그림자로 사진을 바닥에서 살짝 띄웁니다. */}
      <div className="rounded-full bg-gradient-to-b from-white/45 via-white/10 to-white/[0.03] p-[1.5px] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.9),0_0_60px_-24px_rgba(59,130,246,0.7)]">
        <div className="relative rounded-full bg-black/40 p-[3px]">
          <Image
            className="h-[116px] w-[116px] rounded-full object-cover sm:h-[132px] sm:w-[132px]"
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            width={264}
            height={264}
            priority
          />
          {/* 위쪽 하이라이트 — 구체처럼 보이게 하는 얇은 광택 */}
          <div className="pointer-events-none absolute inset-[3px] rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-[3px] rounded-full ring-1 ring-inset ring-white/15" />
        </div>
      </div>

      <h1 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] sm:text-2xl">
        {name}
      </h1>
      <p className="mt-2 text-balance text-center text-sm leading-relaxed text-white/55 sm:text-[15px]">
        {bio}
      </p>
    </section>
  );
}
