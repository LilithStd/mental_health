import { NextResponse } from "next/server";
import { MongoServerError } from "mongodb";


import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/models/user";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  const existing = await User.findOne({ email });

  if (existing) {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  try {
  await User.create({ email, password: hashed });
    } catch (e: unknown) {
      // Mongo duplicate key error
      if (e instanceof MongoServerError && e.code === 11000) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }

      throw e;
    }

  // await User.create({
  //   email,
  //   password: hashed,
  // });

  return NextResponse.json({ success: true });
}