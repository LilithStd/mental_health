'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import DoctorImage from '@/public/images/doctor/doctor_2.png'
import { AboutDoctorContent } from '@/translate/mainPage/aboutDoctor'
import Image from 'next/image'
import AppImage from '../shared/appImage'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'

export default function AboutDoctorBlock() {
    const locale = useLocale() as LocaleType
    const doctorPhotoName = 'AleksandraKonevnina-9_1_cmemvb'

    return (

        <div className={`
            gap-6
            rounded-large
            bg-primary-color/20
            backdrop-blur-md
            p-6
            border border-primary-color/30
            shadow-lg`}>
            <div className={`flex justify-center`}>
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={doctorPhotoName} width={600} height={600} alt="Doctor Image" className='rounded-large float-left mr-4' />
                <div>
                    <div>
                        <h2 className={`text-5xl font-geistSans font-bold `}>{AboutDoctorContent[locale].TITLE}</h2>
                        <p className={`italic text-lg`}>{AboutDoctorContent[locale].DESCRIPTION}</p>
                    </div>
                    <div>
                        <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_2}</h3>
                        <p className={`italic text-md`}>{AboutDoctorContent[locale].DESCRIPTION_2}</p>
                    </div>
                    <div>
                        <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_3}</h3>
                        <p className={`italic text-md`}>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-4 `}>
                <div>
                    <h3 className={`text-2xl font-geistSans font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_4}</h3>
                    <p className={`italic text-md`}>{AboutDoctorContent[locale].DESCRIPTION_4}</p>
                </div>
            </div>

        </div>



    )
}
