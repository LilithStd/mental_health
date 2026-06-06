import { Types } from "mongoose";
import { connectDB } from "../lib/connectDB";
import { LibraryTypes, Library } from "../models/library";
import { LibraryType } from "../types/types";

function mapLibrary(library: LibraryTypes): LibraryType {
    return {
        id: library._id.toString(),
        title: library.title,
        type: library.type,
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

export async function getElementLibraryById(id: string) {
    await connectDB();
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Invalid ObjectId");
    }

    const elementLibrary = await Library.findById(id).lean();

    if (!elementLibrary) {
        throw new Error("Element Library item not found");
    }

    return mapLibrary(elementLibrary);
}

export async function getElementLibraryBySlug(

  slugs: string | string[]

) {

  await connectDB();

  const slugArray = Array.isArray(slugs)

    ? slugs

    : [slugs];

  const elementLibrary = await Library.find({

    slug: { $in: slugArray }

  }).lean();

  return elementLibrary.map(mapLibrary);

}

export async function addElementLibrary(data: Partial<LibraryTypes>) {
    await connectDB();
    console.log('Creating library element with data:', data);
    return Library.create(data);
}

export async function updateElementLibrary(id: string, data: Partial<LibraryTypes>) {
    await connectDB();
    console.log('Updating library element with id:', id, 'and data:', data);
    const updatedElement = await Library.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedElement) {
        throw new Error("Element Library item not found for update");
    }
    return mapLibrary(updatedElement);
}

export async function deleteElementLibrary(id: string) {
    await connectDB();
    const deletedElement = await Library.findByIdAndDelete(id).lean();
    if (!deletedElement) {
        throw new Error("Element Library item not found for deletion");
    }
    return mapLibrary(deletedElement);
}