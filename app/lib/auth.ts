import jwt from "jsonwebtoken";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/models/user";

import { cookies } from "next/headers";


type TokenPayload = {
  userId: string;
};

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

  if (!token) return null;
  
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;
    console.log("Decoded token:", decoded);
    await connectDB();

    const user = await User.findById(decoded.userId).lean();
    console.log("User from DB:", user);

    if (!user) return null;

    return {
      id: user._id.toString(),
      name: user.name,
      role: user.role || "user",
      privileges: user.privileges || "basic",
      email: user.email,
    };
  } catch (error) {
    console.log("Error in getCurrentUser:", error);
    return null;
  }
}