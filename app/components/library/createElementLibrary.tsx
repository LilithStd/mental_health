'use client'
import { useUser } from "@/app/authClientWrapper"
import Link from "next/link";


export default function CreateElementLibrary() {
    const currentUser = useUser();
    if (!currentUser) return null;
  return (
    <Link href="/create-element-library">CreateElementLibrary</Link>
  )
}
