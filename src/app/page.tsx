import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 더미 데이터입니다. 나중에 실제 프로필과 링크로 교체하세요.
const profile = {
  name: "이윤우",
  bio: "안녕하세요",
  avatarUrl: "/avatar-placeholder.svg",
};

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-5 py-12 sm:py-16">
      <Profile
        name={profile.name}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />

      <nav className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.href} title={link.title} href={link.href} />
        ))}
      </nav>
    </main>
  );
}
