'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import DoctorImage from '@/public/images/doctor/doctor_2.png'
import { AboutDoctorContent } from '@/translate/mainPage/aboutDoctor'
import Image from 'next/image'

export default function AboutDoctorBlock() {
    const locale = useLocale() as LocaleType

    return (
        <div>
            <div className={`grid grid-cols-2 rounded-large bg-subContainer p-6`}>
                <div className={`flex justify-center items-center mt-4`}>
                    <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' />
                </div>
                <div className={`flex flex-col gap-4 p-6`}>
                    <h2 className={`text-2xl font-bold `}>{AboutDoctorContent[locale].TITLE}</h2>
                    <p>{AboutDoctorContent[locale].DESCRIPTION}</p>
                    <div>
                        <h3 className={`text-xl font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_2}</h3>
                        <p className={`text-sm mt-2`}>{AboutDoctorContent[locale].DESCRIPTION_2}</p>
                    </div>

                    <div>
                        <h3 className={`text-xl font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_3}</h3>
                        <p className={`text-sm mt-2`}>{AboutDoctorContent[locale].DESCRIPTION_3}</p>
                    </div>
                </div>
                <div>
                    <h3 className={`text-xl font-semibold mt-4`}>{AboutDoctorContent[locale].TITLE_4}</h3>
                    <p className={`text-sm mt-2`}>{AboutDoctorContent[locale].DESCRIPTION_4}</p>
                </div>
            </div>

        </div>

    )
}
