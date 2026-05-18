import { connectDB } from "../lib/connectDB";
import { LibraryTypes, Library } from "../models/library";
import { LibraryType } from "../types/types";

function mapLibrary(library: LibraryTypes): LibraryType {
    return {
        id: library._id.toString(),
        title: library.title,
        description: library.description,
        content: library.content,
        hashTags: library.hashTags,
        image: library.image,
        createdAt: library.createdAt.toISOString(),
        updatedAt: library.updatedAt?.toISOString()
    }
}

export async function getAllLibrary() {
    await connectDB();
    const library = await Library.find().lean();
    return library.map(mapLibrary);
}

export async function getLibraryById(id: string) {
    await connectDB();
    const library = await Library.findById(id).lean();
    if (!library) {
        throw new Error("Library item not found");
    }
    return mapLibrary(library);

    
}