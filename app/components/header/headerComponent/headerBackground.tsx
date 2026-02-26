
import Image from "next/image"
import LightThemeBackground from "@/public/images/header/cloudsBackground.png"

interface HeaderBackgroundProps {
    children: React.ReactNode;
}


export default function HeaderBackground({ children }: HeaderBackgroundProps) {
    return (
        <div className={`flex max-w-6xl justify-between items-center w-full relative  bg-subContainer rounded-large`}>
            <div className={`flex w-full h-full justify-between items-center relative z-10`}>
                {children}
            </div>

            <Image src={LightThemeBackground} alt="Light Theme Background" className="z-0 absolute w-full h-full object-cover rounded-large opacity-70" />
        </div>
    )
}
