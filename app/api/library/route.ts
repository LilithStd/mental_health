import { getAllLibrary } from "@/app/service/libraryService";
import { NextResponse } from "next/server";

export async function GET() {
     const library = await getAllLibrary();
      return NextResponse.json(library)
}