import { connectDB } from "../lib/connectDB";
import { Test, TestTypes } from "../models/test";
import { TestType } from "../types/types";



function mapTest(test: TestTypes): TestType {
    return {
        id: test._id.toString(),
        label: test.label,
        title: test.title,
        content: test.content,
        questions: test.questions,
        createdAt: test.createdAt,
        updatedAt: test.updatedAt
    }
}

export async function getAllTests() {
    await connectDB();
    const tests = await Test.find().lean();
    return tests.map(mapTest);
}