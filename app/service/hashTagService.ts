import { connectDB } from "../lib/connectDB";
import { HashTag, HashTagTypes } from "../models/hashTags";
import { HashTagType } from "../types/types";

function mapHashTag(ht: HashTagTypes): HashTagType {
    return {
        id: ht._id.toString(),
        type: ht.type,
        title: ht.title,
        color: ht.color,
        createdAt: ht.createdAt.toISOString(),
        updatedAt: ht.updatedAt?.toISOString(),
    };
}

export async function getAllHashTags() {
    await connectDB();
    const hashTags = await HashTag.find().lean();
    return hashTags.map(mapHashTag);
}

export async function createHashTag(data: { type: string, title: Record<string, string>, color: string }) {
    await connectDB();
    const newHashTag = await HashTag.create(data);
    return mapHashTag(newHashTag);
}