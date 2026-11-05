import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

const profile = {
  name: "비밀",
  bio: "안녕하세요. 안녕하세요",
  avatarUrl: "/profile.jpg",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center px-7 py-16 sm:px-8 sm:py-24">
      <Profile
        name={profile.name}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />

      <nav className="mt-12 flex w-full flex-col gap-3.5 sm:mt-14 sm:gap-4">
        <LinkList links={links} />
      </nav>
    </main>
  );
}
