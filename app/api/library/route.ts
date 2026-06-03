import { getAllLibrary, getElementLibraryById } from "@/app/service/libraryService";
import { NextResponse } from "next/server";

export async function GET(id?: string) {
    if (id) {
        const libraryElement = await getElementLibraryById(id);
        return NextResponse.json(libraryElement);
    }
    const library = await getAllLibrary();
    return NextResponse.json(library)
}

export async function POST() {
    return NextResponse.json({ message: "POST request received" })
}