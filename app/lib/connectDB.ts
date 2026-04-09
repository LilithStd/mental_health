// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI не указан");
}

// 👇 описываем тип кеша
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// 👇 расширяем global
declare global {
  var mongooseCache: MongooseCache | undefined;
}

// 👇 используем или создаём кеш
const cached = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  // сохраняем в global
  global.mongooseCache = cached;

  return cached.conn;
}