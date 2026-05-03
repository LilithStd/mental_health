import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/models/user";
import { UserAuthType } from "@/app/types/types";

type TokenPayload = {
  userId: string;
};

export async function getCurrentUser(): Promise<UserAuthType | null> {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload; // 👈 ключевой момент

    await connectDB();

    const user = await User.findById(decoded.userId).lean();

    if (!user) return null;


    const result: UserAuthType = {
      id: user._id.toString(),
      email: user.email,
      role: user.role ?? "user",
      privileges: user.privileges ?? "basic",
    };

    return result;
  } catch {
    return null;
  }
}