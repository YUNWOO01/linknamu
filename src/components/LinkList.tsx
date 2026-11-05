"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/links";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있고, 카드에는 0회로 표시됩니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => setCounts(data.counts))
      .catch(() => {
        // 실패해도 0회로 계속 표시합니다.
      });
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) => {
    // 화면에 즉시 반영하고, 서버 응답의 실제 값으로 맞춥니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true, // 새 탭으로 이동해도 요청이 끊기지 않게 합니다.
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) =>
        setCounts((prev) => ({ ...prev, [id]: data.count })),
      )
      .catch(() => {});
  };

  return (
    <>
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          href={link.href}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </>
  );
}
