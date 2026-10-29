import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3">
      <Image
        className="rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
        src={avatarUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
      />
      <h1 className="text-2xl font-bold sm:text-3xl">{name}</h1>
      <p className="text-sm text-black/60 dark:text-white/60 sm:text-base">
        {bio}
      </p>
    </section>
  );
}
