import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "비밀",
  bio: "안녕하세요. 안녕하세요",
  avatarUrl: "/profile.jpg",
};

// TODO: 더미 데이터입니다. 나중에 실제 링크로 교체하세요.

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center px-7 py-16 sm:px-8 sm:py-24">
      <Profile
        name={profile.name}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />

      <nav className="mt-12 flex w-full flex-col gap-3.5 sm:mt-14 sm:gap-4">
        {links.map((link) => (
          <LinkCard key={link.href} title={link.title} href={link.href} />
        ))}
      </nav>
    </main>
  );
}
