'use client'
import Image from 'next/image'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import { AboutDoctorContent } from '@/translate/mainPage/aboutDoctor'
import AppImage from '../shared/appImage'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from '@/app/globalConsts/globalConsts'

export default function AboutDoctorBlock() {
    const locale = useLocale() as LocaleType
    const doctorPhotoName = UPLOAD_IMAGE_NAME.bio.photo

    return (

        <div className={`
            gap-6
            rounded-large
            bg-primary-color/20
            backdrop-blur-md
            p-6
            border border-primary-color/30
            shadow-lg`}>
            <div className={`grid grid-cols-2 gap-4 justify-center`}>
                
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={doctorPhotoName} width={500} height={800} alt="Doctor Image" className='rounded-large  z-100 float-left mr-4' />
                <div>
                    <div>
                        <h2 className={`text-5xl font-geistSans font-bold `}>{AboutDoctorContent[locale].TITLE}</h2>
                        <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION}</p>
                    </div>
                    <div>
                        <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_2}</h3>
                        <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_2}</p>
                    </div>
                    <div>
                        <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_3}</h3>
                        <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                    </div>
                </div>
                {/* <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_4}</h3> */}
                    {/* <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_4}</p> */}
            </div>
            <div className={`flex flex-col gap-4 `}>
                <div>
                    {/* <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_4}</h3>
                    <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION_4}</p> */}
                </div>
            </div>
            <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="z-0  w-full h-full object-cover rounded-large opacity-30" />

        </div>



    )
}
