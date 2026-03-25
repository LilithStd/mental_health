
import Image from "next/image"
import LogoImage from "@/public/images/header/mental_health_world_icon.png"

export default function Logo() {
    return (
        <div className={`flex items-center gap-2`}>
            {/* <Image src={LogoImage} alt="Mental Health Logo" className="w-40 h-auto " /> */}
            <h2 className={`text-2xl font-geistSans font-bold`}>Mental Health</h2>
        </div>

    )
}
