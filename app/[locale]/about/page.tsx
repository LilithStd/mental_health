import Image from "next/image";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { ABOUT_PAGE_CONTENT } from "@/translate/aboutPage/aboutContent";
import AppImage from "@/app/components/shared/appImage";
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { AboutDoctorContent } from "@/translate/mainPage/aboutDoctor";
const DoctorImage = UPLOAD_IMAGE_NAME.bio.photo

export default async function AboutPage() {
    const locale = await getLocale() as LocaleType;
    return  (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div className={``}>
                    <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={DoctorImage} width={500} height={800} alt="Doctor Image" className='rounded-large  z-100 float-left mr-4' />
                    
                        <h2 className={`text-5xl text-center font-bold`}>{ABOUT_PAGE_CONTENT[locale].title}</h2>
                        <p className={``}>{ABOUT_PAGE_CONTENT[locale].description}</p>
                        <p>{AboutDoctorContent[locale].DESCRIPTION_2}</p> 
                        <p>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis asperiores aut iure itaque sapiente omnis incidunt culpa eos architecto voluptatibus, natus eum possimus maxime nobis amet magnam vero nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque molestias eligendi voluptatum. Culpa quos dolore accusantium, quia vitae illo aliquid officia corporis minus doloremque consectetur mollitia vel eius non?</p>
                        <div className={`flex w-full flex-col flex-1 mt-6 rounded-large`}>
                            <h2 className={`text-3xl justify-center text-center font-bold`}>{ABOUT_PAGE_CONTENT[locale].contact.title}</h2>
                            <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].contact.email}</p>
                </div>
                  
            </div>
  
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
            
        </div>
  )
}
