
import Image from "next/image"
import LogoImage from "@/public/images/mentalHealthWords(small).png"

export default function Logo() {
    return (
        <div>
            <Image src={LogoImage} alt="Mental Health Logo" className="w-40 h-auto" />
        </div>
    )
}
