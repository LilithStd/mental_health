import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType } from "@/app/types/types"


export default async function Footer() {
    const locale = await getLocale() as LocaleType
    return (
        <div className={`flex rounded-medium  justify-center  indents-main-container `}>
            <div className={`flex flex-col max-w-6xl justify-between items-center w-full bg-subContainer rounded-large min-h-20 p-6`}>
                <div>
                    <h2 className={`text-2xl font-bold `}>Mental Healths</h2>
                    <h3 className={`text-lg font-medium `}>2026</h3>
                </div>
                <div>
                    <h2 className={`text-2xl font-bold `}>Platform</h2>
                    <h3 className={`text-lg font-medium `}>About</h3>
                    <h3 className={`text-lg font-medium `}>Contact</h3>
                </div>
                <div>
                    <h2 className={`text-2xl font-bold `}>Legal</h2>
                    <h3 className={`text-lg font-medium `}>Privacy Policy</h3>
                    <h3 className={`text-lg font-medium `}>Terms of Service</h3>
                </div>
                <div>
                    <h2 className={`text-2xl font-bold `}>Follow Us</h2>
                    <h3 className={`text-lg font-medium `}>Instagram</h3>
                    <h3 className={`text-lg font-medium `}>Facebook</h3>
                </div>
            </div>

        </div>
    )
}
