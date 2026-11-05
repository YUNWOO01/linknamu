import { NextResponse } from "next/server";
import { linkIds } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 한 번에 반환: { github: 42, ... }
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find().toArray();
    const counts: Record<string, number> = {};
    for (const doc of docs) counts[doc._id] = doc.count;
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가: body { id: "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "잘못된 링크 id" }, { status: 400 });
  }

  try {
    const collection = await getClicksCollection();
    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
