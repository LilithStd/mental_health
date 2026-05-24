import { connectDB } from "../lib/connectDB";
import { HashTag } from "../models/hashTags";

export async function getAllHashTags() {
    await connectDB();
    const hashTags = await HashTag.find().lean();
    return hashTags.map((ht) => ({
        id: ht._id.toString(),
        type: ht.type,
        title: ht.title,
        color: ht.color,
        createdAt: ht.createdAt.toISOString(),
        updatedAt: ht.updatedAt?.toISOString(),
    }));
}

export async function createHashTag(data: { type: string, title: Record<string, string>, color: string }) {
    await connectDB();
    return HashTag.create(data);
}