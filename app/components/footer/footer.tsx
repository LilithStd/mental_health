import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType } from "@/app/types/types"
import InstagramIcon from "@/public/icons/instagram.svg"


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
                    <h2 className={`text-2xl font-bold `}>Platform</h2>
                    <h3 className={`text-lg font-medium `}>About</h3>
                    <h3 className={`text-lg font-medium `}>Contact</h3>
                </div>
                <div className={`flex flex-col gap-2 p-4`}>
                    <h2 className={`text-2xl font-bold `}>Legal</h2>
                    <h3 className={`text-lg font-medium `}>Privacy Policy</h3>
                    <h3 className={`text-lg font-medium `}>Terms of Service</h3>
                </div>
                <div className={`flex flex-col gap-2 p-4`}>
                    <h2 className={`text-2xl font-bold `}>Follow Us</h2>
                    <div className={`flex gap-2`}>
                        <InstagramIcon className={`w-6 h-6`} />
                        <h3 className={`text-lg font-medium `}>Instagram</h3>
                    </div>
                    <h3 className={`text-lg font-medium `}>Facebook</h3>
                </div>
            </div>

        </div>
    )
}
