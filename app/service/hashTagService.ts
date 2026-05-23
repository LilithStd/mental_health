export async function getAllHashTags() {
    await connectDB();
    const hashTags = await HashTag.find().lean();
    return hashTags.map((ht) => ({
        id: ht._id.toString(),
        name: ht.name,
        createdAt: ht.createdAt.toISOString(),
        updatedAt: ht.updatedAt?.toISOString(),
    }));
}