export type LinkItem = {
  id: string;
  title: string;
  href: string;
};

// TODO: 더미 데이터입니다. 나중에 실제 링크로 교체하세요.
// id는 MongoDB에 클릭 수를 저장하는 키이므로 바꾸지 마세요.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", href: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", href: "https://linkedin.com" },
  { id: "blog", title: "Blog", href: "https://example.com" },
];

export const linkIds = new Set(links.map((link) => link.id));
