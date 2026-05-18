'use client'
import { useUser } from "@/app/authClientWrapper"
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import Link from "next/link";


export default function CreateElementLibrary() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const currentUser = useUser();
    if (!currentUser) return null;
  return (
    <Link className={`p-2 bg-primary-color/50 rounded-large`} href={routesAdaptive.library.create()}>CreateElementLibrary</Link>
  )
}
