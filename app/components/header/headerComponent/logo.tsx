import { UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts"
import AppImage from "../../shared/appImage"
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum"



export default function Logo() {
    const logoImageSrc = UPLOAD_IMAGE_NAME.global.header.logo
    return (
        <div className={`flex items-center w-full gap-2 bg-primary-color/30 border border-primary-color/10 rounded-large p-2 `}>
            <AppImage
                type={IMAGES_UPLOAD_PATH.GLOBAL}
                imageName={logoImageSrc}
                alt="Mental Health Logo"
                width={100}
                height={100}
                className={``}
            />
            <h2 className={`text-2xl font-geistSans font-bold`}>Mental Health</h2>
        </div>

    )
}
