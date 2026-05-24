import { createHashTag, getAllHashTags } from "@/app/service/hashTagService";
import { NextResponse } from "next/server";

export async function GET() {
    const hashTags = await getAllHashTags();
    return NextResponse.json(hashTags);
}

export async function POST(request: Request) {
    const { type, title, color } = await request.json();
    console.log('Received data:', { type, title, color });
    if (!type || !title || !color) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    const newHashTag = await createHashTag({ type, title, color });
    return NextResponse.json({ message: "Hash tag created successfully", hashTag: newHashTag }, { status: 201 });
}

