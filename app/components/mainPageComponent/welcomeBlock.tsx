'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import DoctorImage from '@/public/images/doctor/doctor_6.png'
import { WelcomeBlockContent } from '@/translate/mainPage/welcomeBlock'

import Image from 'next/image'
import Link from 'next/link'





export default function WelcomeBlock() {
    const localeAdapted = useLocale() as LocaleType

    const routesAdaptive = routes(localeAdapted as LocaleType)
    const listPriviliges = WelcomeBlockContent[localeAdapted].PRIVILEGES_LIST

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4 `}>
            <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' />
            <div>
                <h2 className={`text-2xl font-bold `}>{WelcomeBlockContent[localeAdapted].TITLE}</h2>
                <p className={``}>{WelcomeBlockContent[localeAdapted].DESCRIPTION}</p>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>{WelcomeBlockContent[localeAdapted].TITLE_2}</h3>
                    <Link href={routesAdaptive.consultation.root} className={`mt-4 px-4 py-2 w-fit bg-buttonContainer rounded-large`}>{WelcomeBlockContent[localeAdapted].SIGN_UP_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>{WelcomeBlockContent[localeAdapted].TITLE_3}</h3>
                    <Link href={routesAdaptive.tests.root} className={`mt-4 px-4 w-fit py-2 bg-buttonContainer rounded-large`}>{WelcomeBlockContent[localeAdapted].TESTS_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>{WelcomeBlockContent[localeAdapted].PRIVILEGES_TITLE}</h3>
                    {listPriviliges.map((privilege, index) => (
                        <div key={index} className={`flex items-center mt-2`}>
                            <span className={`w-2 h-2 bg-activeElement rounded-full mr-2`}></span>
                            <span>{privilege}</span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
