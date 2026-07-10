'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import { WelcomeBlockContent } from '@/translate/mainPage/welcomeBlock'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'
import AppImage from '../shared/appImage'
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from '@/app/globalConsts/globalConsts'





export default function WelcomeBlock() {
    const localeAdapted = useLocale() as LocaleType

    const routesAdaptive = routes(localeAdapted as LocaleType)
    const listPriviliges = WelcomeBlockContent[localeAdapted].PRIVILEGES_LIST
    const BrainIllustration = UPLOAD_IMAGE_NAME.global.mainPage.welcomeBlock

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4  rounded-large items-center bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30`}>
            <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={BrainIllustration} width={600} height={600} alt="Brain Illustration" className='rounded-large scale-120' />
            <div>
                <h2 className={`text-5xl font-geistSans font-bold`}>{WelcomeBlockContent[localeAdapted].TITLE}</h2>
                <p className={`font-geistSans italic  text-xl`}>{WelcomeBlockContent[localeAdapted].DESCRIPTION}</p>
                <div className={`flex flex-col gap-4 mt-4 `}>
                    <Link href={routesAdaptive.consultation.root} className={`p-4 w-fit bg-primary-color/40 backdrop-blur-md border border-primary-color/50 font-geistSans shadow-lg z-10 font-bold italic rounded-full hover:bg-accentElement hover:scale-105`}>{WelcomeBlockContent[localeAdapted].SIGN_UP_BUTTON}</Link>
                    <Link href={routesAdaptive.tests.root} className={`p-4 w-fit 
                         bg-primary-color/40 backdrop-blur-md border border-primary-color/50 font-geistSans font-bold italic z-10 shadow-lg rounded-full hover:bg-accentElement hover:scale-105`}>{WelcomeBlockContent[localeAdapted].TESTS_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <ul className={`list-none grid grid-cols-1 md:grid-cols-2 gap-6 mt-6`}>
                        {listPriviliges.map((privilege, index) => (
                            <li key={index} className={`flex items-center gap-2`}>
                                <span className={`bg-activeElement/20 rounded-full p-2 flex items-center justify-center`}>
                                    <privilege.icon className={`w-6 h-6`} fill={'green'} />
                                </span>
                                <span className={`font-geistSans font-bold`}>{privilege.text}</span>

                            </li>
                        ))}
                    </ul>

                </div>

            </div>
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-30" />
        </div>
    )
}
