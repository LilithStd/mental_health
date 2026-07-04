import { Types } from "mongoose";
import { connectDB } from "../lib/connectDB";
import { Test, TestTypes } from "../models/test";
import { TestType } from "../types/types";
import { SEARCH_REQUEST_TYPE } from "../globalConsts/globalEnum";



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

export async function searchRequestTests(searchParams: { type: SEARCH_REQUEST_TYPE, query: string }) {
    await connectDB();
    
    // return tests.map(mapTest);
}

export async function getTestById(id: string) {
    await connectDB();
    const test = await Test.findById(new Types.ObjectId(id)).lean();
    if (!test) {
        throw new Error("Test not found");
    }
    return {
        id: test._id.toString(),
        label: test.label,
        title: test.title,
        content: test.content,
        questions: test.questions,
        createdAt: test.createdAt,
        updatedAt: test.updatedAt
    };
}