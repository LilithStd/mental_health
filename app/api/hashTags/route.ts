import { getAllHashTags } from "@/app/service/hashTagService";
import { NextResponse } from "next/server";

export async function GET() {
    const hashTags = await getAllHashTags();
    return NextResponse.json(hashTags);
}

export async function POST(request: Request) {
    const { type, title, color } = await request.json();
    
    return NextResponse.json({ message: "Hash tag created successfully" });
}

