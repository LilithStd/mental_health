import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType } from "@/app/types/types"
import InstagramIcon from "@/public/icons/instagram.svg"
import FacebookIcon from "@/public/icons/facebook.svg"
import { FooterContent } from "@/translate/shared/footer"
import Link from "next/link"
import { SOCIAL_MEDIA_LINKS } from "@/app/globalConsts/globalConsts"


export default async function Footer() {
    const locale = await getLocale() as LocaleType
    return (
        <div className={`flex rounded-medium  justify-center   indents-main-container `}>
            <div className={`flex  max-w-6xl justify-between items-center w-full bg-primary-color/20 rounded-large min-h-20 border border-primary-color/30 shadow-lg `}>
                <div className={`flex flex-col gap-2 p-4`}>
                    <h2 className={`text-2xl font-bold `}>Mental Healths</h2>
                    <h3 className={`text-lg font-medium `}>2026</h3>
                </div>
                <div className={`flex flex-col gap-2 p-4`}>
                    <h3 className={`text-lg font-medium `}>{FooterContent[locale].about}</h3>
                    <h3 className={`text-lg font-medium `}>{FooterContent[locale].contact}</h3>
                </div>
                {/* <div className={`flex flex-col gap-2 p-4`}>
                    <h2 className={`text-2xl font-bold `}>Legal</h2>
                    <h3 className={`text-lg font-medium `}>Privacy Policy</h3>
                    <h3 className={`text-lg font-medium `}>Terms of Service</h3>
                </div> */}
                <div className={`flex flex-col gap-2 p-4`}>
                    <h2 className={`text-2xl font-bold `}>{FooterContent[locale].followUs}</h2>
                    <div className={`flex gap-2`}>
                        <InstagramIcon className={`w-6 h-6`} />
                        <Link href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={`text-lg font-medium `}>{FooterContent[locale].instagram}</Link>
                    </div>
                    <div className={`flex gap-2`}>
                        <FacebookIcon className={`w-6 h-6`} />
                        <Link href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" rel="noopener noreferrer" className={`text-lg font-medium `}>{FooterContent[locale].facebook}</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
