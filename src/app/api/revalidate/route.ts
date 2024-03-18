import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== "desamatakomaroso2024") {
    return NextResponse.json({ status: 401, message: "ivalid secret" });
  }
  if (!tag) {
    return NextResponse.json({ status: 400, message: "missing tag params" });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, now: Date.now() });
}
