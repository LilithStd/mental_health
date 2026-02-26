
import Image from "next/image"
import LogoImage from "@/public/images/header/mental_health_world_icon.png"

export default function Logo() {
    return (
        <>
            <Image src={LogoImage} alt="Mental Health Logo" className="w-40 h-auto " />
        </>

    )
}
