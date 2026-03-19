'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import DoctorImage from '@/public/images/doctor/doctor_6.png'
import BrainIllustration from '@/public/images/problems/mentalHealthWomenSmall.png'
import { WelcomeBlockContent } from '@/translate/mainPage/welcomeBlock'

import Image from 'next/image'
import Link from 'next/link'





export default function WelcomeBlock() {
    const localeAdapted = useLocale() as LocaleType

    const routesAdaptive = routes(localeAdapted as LocaleType)
    const listPriviliges = WelcomeBlockContent[localeAdapted].PRIVILEGES_LIST

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4  `}>
            {/* <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' /> */}
            <Image src={BrainIllustration} alt="Brain Illustration" className='object-cover w-full scale-120 rounded-large' />
            <div>
                <h2 className={`text-3xl font-pattaya font-bold`}>{WelcomeBlockContent[localeAdapted].TITLE}</h2>
                <p className={`font-poiret font-bold text-xl`}>{WelcomeBlockContent[localeAdapted].DESCRIPTION}</p>
                <div className={`flex flex-col gap-2 `}>
                    <h3 className={`text-2xl font-bold font-pattaya mt-2`}>{WelcomeBlockContent[localeAdapted].TITLE_2}</h3>
                    <Link href={routesAdaptive.consultation.root} className={`px-4 py-2 w-fit bg-buttonContainer rounded-large`}>{WelcomeBlockContent[localeAdapted].SIGN_UP_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <h3 className={`text-2xl font-bold font-pattaya mt-2`}>{WelcomeBlockContent[localeAdapted].TITLE_3}</h3>
                    <Link href={routesAdaptive.tests.root} className={`px-4 w-fit py-2 bg-buttonContainer rounded-large`}>{WelcomeBlockContent[localeAdapted].TESTS_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <h3 className={`text-xl font-pattaya font-bold mt-2`}>{WelcomeBlockContent[localeAdapted].PRIVILEGES_TITLE}</h3>
                    <ul>
                        {listPriviliges.map((privilege, index) => (
                            <li key={index} className={`flex items-center gap-2`}>
                                <span className={`w-2 h-2 bg-activeElement rounded-full mr-2`}></span>
                                <span className={`font-poiret font-bold`}>{privilege}</span>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
    )
}
