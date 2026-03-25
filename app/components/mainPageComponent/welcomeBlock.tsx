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
    console.log(listPriviliges)
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4  `}>
            {/* <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' /> */}
            <Image src={BrainIllustration} alt="Brain Illustration" className='object-cover w-full scale-120 rounded-large' />
            <div>
                <h2 className={`text-5xl font-geistSans font-bold`}>{WelcomeBlockContent[localeAdapted].TITLE}</h2>
                <p className={`font-geistSans  text-xl`}>{WelcomeBlockContent[localeAdapted].DESCRIPTION}</p>
                {/* <div className={`flex flex-col gap-2 `}>
                    <h3 className={`text-2xl font-bold font-geistSans mt-2`}>{WelcomeBlockContent[localeAdapted].TITLE_2}</h3>
                    <Link href={routesAdaptive.consultation.root} className={`px-4 py-2 w-fit bg-buttonContainer font-geistSans font-bold italic rounded-large`}>{WelcomeBlockContent[localeAdapted].SIGN_UP_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-2`}>
                    <h3 className={`text-2xl font-bold font-geistSans mt-2`}>{WelcomeBlockContent[localeAdapted].TITLE_3}</h3>
                    <Link href={routesAdaptive.tests.root} className={`px-4 w-fit py-2 bg-buttonContainer font-geistSans font-bold italic rounded-large`}>{WelcomeBlockContent[localeAdapted].TESTS_BUTTON}</Link>
                </div> */}
                <div className={`flex flex-col gap-4 mt-4 `}>
                    <Link href={routesAdaptive.consultation.root} className={`p-4 w-fit bg-buttonContainer font-geistSans shadow-lg font-bold italic rounded-full`}>{WelcomeBlockContent[localeAdapted].SIGN_UP_BUTTON}</Link>
                    <Link href={routesAdaptive.tests.root} className={`p-4 w-fit  bg-neutral-200 font-geistSans font-bold italic rounded-full`}>{WelcomeBlockContent[localeAdapted].TESTS_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-2`}>
                    {/* <h3 className={`text-xl font-geistSans font-bold mt-2`}>{WelcomeBlockContent[localeAdapted].PRIVILEGES_TITLE}</h3> */}
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

        </div>
    )
}
