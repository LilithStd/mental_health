import Image from "next/image";
import Link from "next/link";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { ABOUT_PAGE_CONTENT } from "@/translate/aboutPage/aboutContent";
import AppImage from "@/app/components/shared/appImage";
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { AboutDoctorContent } from "@/translate/mainPage/aboutDoctor";
import { routes } from "@/app/helpers/helpersFunctions";
import { WelcomeBlockContent } from "@/translate/mainPage/welcomeBlock";
const DoctorImage = UPLOAD_IMAGE_NAME.bio.photo

export default async function AboutPage() {
    const locale = await getLocale() as LocaleType;
    const routesAdaptive = routes(locale)
    return  (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div className={``}>
                    <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={DoctorImage} width={500} height={800} alt="Doctor Image" className='rounded-large  z-100 float-left mr-4' />
                    
                        <h2 className={`text-5xl text-center font-bold mb-4`}>{ABOUT_PAGE_CONTENT[locale].title}</h2>
                        <p className={``}>{ABOUT_PAGE_CONTENT[locale].description}</p>
                        <p>{AboutDoctorContent[locale].DESCRIPTION_2}</p> 
                        <p>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis asperiores aut iure itaque sapiente omnis incidunt culpa eos architecto voluptatibus, natus eum possimus maxime nobis amet magnam vero nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque molestias eligendi voluptatum. Culpa quos dolore accusantium, quia vitae illo aliquid officia corporis minus doloremque consectetur mollitia vel eius non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi debitis, delectus aspernatur nulla ullam, asperiores eum odio suscipit illum inventore ea quasi error qui culpa tempore quod! Aliquam, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo nemo asperiores voluptatum aut labore cumque provident consequatur, ad maxime tenetur? Est illum ad facere! Corporis ratione ex voluptatibus omnis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus obcaecati labore distinctio. Aut sint corporis vero fugiat molestiae ad error harum eaque perspiciatis labore cum, expedita voluptatum officiis repellendus obcaecati!</p>
                       
                        <div className={`flex bg-primary-color/20 rounded-large gap-4 mt-4 p-4  items-center justify-around z-10`}>
                             <div className={`flex  flex-col rounded-large`}>
                                <h2 className={`text-3xl justify-center text-center font-bold`}>{ABOUT_PAGE_CONTENT[locale].contact.title}</h2>
                                <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].contact.email}</p>
                            </div>
                            <div className={`flex flex-col rounded-large items-center`}>
                                <p>{ABOUT_PAGE_CONTENT[locale].contact.or}</p>
                                <p>{ABOUT_PAGE_CONTENT[locale].contact.signUp}</p>
                            </div>
                            <div className={`flex flex-col rounded-large items-center`}>
                                 <Link href={routesAdaptive.consultation.root} className={`p-4 bg-primary-color/40 backdrop-blur-md border border-primary-color/50 font-geistSans shadow-lg z-20 font-bold italic rounded-full hover:bg-accentElement hover:scale-105`}>{WelcomeBlockContent[locale].SIGN_UP_BUTTON}</Link>
                            </div>
                           
                        </div>
                         
                        
                  
            </div>
  
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
            
        </div>
  )
}
