import { getAllHashTags } from "@/app/service/hashTagService";
import { NextResponse } from "next/server";

export async function GET() {
    const hashTags = await getAllHashTags();
    return NextResponse.json(hashTags);
}

