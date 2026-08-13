'use client'
import Image from 'next/image'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import { AboutDoctorContent } from '@/translate/mainPage/aboutDoctor'
import AppImage from '../shared/appImage'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from '@/app/globalConsts/globalConsts'
import Link from 'next/link'
import { routes } from '@/app/helpers/helpersFunctions'

export default function AboutDoctorBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const doctorPhotoName = UPLOAD_IMAGE_NAME.bio.photo

    return (

        <div className={`
            gap-6
            rounded-large
            bg-primary-color/8
            backdrop-blur-md
            p-6
            border border-primary-color/10
`}>
            <div className={`grid grid-cols-2 gap-4 justify-center`}>
                
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={doctorPhotoName} width={500} height={800} alt="Doctor Image" className='rounded-large  z-100 float-left mr-4' />
                <div>
                    <div>
                        <h2 className={`text-5xl font-poiret font-bold `}>{AboutDoctorContent[locale].TITLE}</h2>
                        <p className={`italic font-poiret text-lg`}>{AboutDoctorContent[locale].DESCRIPTION}</p>
                    </div>
                    <div>
                        <p className={`italic font-poiret text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_2}</p>
                    </div>
                    <div>
                        <p className={`italic font-poiret text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                    </div>
                    <div className={`flex flex-col gap-4 mt-4 `}>
                        <Link href={routesAdaptive.about.root} className={`p-4 w-fit bg-primary-color/10 backdrop-blur-md border border-primary-color/12 font-poiret shadow-lg z-10 font-bold italic rounded-full hover:bg-primary-color/40 hover:scale-105`}>{AboutDoctorContent[locale].ABOUT_DOCTOR_BUTTON}</Link>
                    </div>
                </div>
                
            </div>
            {/* <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="z-0  w-full h-full object-cover rounded-large opacity-30" /> */}

        </div>



    )
}
