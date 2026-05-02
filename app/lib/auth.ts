import jwt from "jsonwebtoken";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/models/user";
import { NextResponse } from "next/server";

type TokenPayload = {
  userId: string;
};

export async function getCurrentUser() {
    const response = NextResponse.json({ success: true });
    const token = response.cookies.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;

    await connectDB();

    const user = await User.findById(decoded.userId).lean();

    if (!user) return null;

    return {
      id: user._id.toString(),
      email: user.email,
    };
  } catch {
    return null;
  }
}