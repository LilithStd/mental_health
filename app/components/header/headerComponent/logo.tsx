import { UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts"
import AppImage from "../../shared/appImage"
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum"



export default function Logo() {
    const logoImageSrc = UPLOAD_IMAGE_NAME.global.header.logo
    return (
        <div className={`flex items-center gap-2`}>
            {/* <Image src={LogoImage} alt="Mental Health Logo" className="w-40 h-auto " /> */}
            <AppImage
                type={IMAGES_UPLOAD_PATH.GLOBAL}
                imageName={logoImageSrc}
                alt="Mental Health Logo"
                width={40}
                height={40}
                className={`w-10 h-auto `}
            />
            <h2 className={`text-2xl font-geistSans font-bold`}>Mental Health</h2>
        </div>

    )
}
