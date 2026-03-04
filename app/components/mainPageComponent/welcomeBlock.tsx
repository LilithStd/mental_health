'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import DoctorImage from '@/public/images/doctor/doctor_6.png'
import { WelcomeBlockEN } from '@/translate/mainPage/en/welcomeBlock'
import Image from 'next/image'
import Link from 'next/link'

const listPriviliges = WelcomeBlockEN.PRIVILEGES_LIST


export default function WelcomeBlock({ locale }: { locale: string }) {
    const routesAdaptive = routes(locale)

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4 `}>
            <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' />
            <div>
                <h2 className={`text-2xl font-bold `}>{WelcomeBlockEN.TITLE}</h2>
                <p className={``}>{WelcomeBlockEN.DESCRIPTION}</p>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>Already know  your problem?</h3>
                    <Link href={routesAdaptive.consultation.root} className={`mt-4 px-4 py-2 w-fit bg-buttonContainer rounded-large`}>{WelcomeBlockEN.SIGN_UP_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>Need some guidance?</h3>
                    <Link href={routesAdaptive.tests.root} className={`mt-4 px-4 w-fit py-2 bg-buttonContainer rounded-large`}>{WelcomeBlockEN.TESTS_BUTTON}</Link>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>Our Privileges:</h3>
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
