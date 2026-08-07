
import Image from "next/image"
import LightThemeBackground from "@/public/images/header/cloudsBackground.png"

interface HeaderBackgroundProps {
    children: React.ReactNode;
}


export default function HeaderBackground({ children }: HeaderBackgroundProps) {
    return (
        <div className={`flex backdrop-blur-md  max-w-6xl  justify-between items-center w-full rounded-large shadow-md  bg-primary-color/8 border border-primary-color/10 p-4`}>
            <div className={`flex w-full h-full justify-between items-center relative z-10`}>
                {children}
            </div>
        </div>
    )
}
