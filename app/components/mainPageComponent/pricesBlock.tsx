'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import MedicineWomen from '@/public/images/doctor/doctor_5.png'
import { PricesBlockContent } from '@/translate/mainPage/pricesBlock'
import Image from 'next/image'
import Link from 'next/link'

export default function PricesBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    return (
        <div className={`flex gap-4 p-6 justify-center items-center`}>
            <div className={`grid grid-cols-2 p-6 justify-center items-center`}>
                <div className={`flex flex-col gap-4`}>
                    <h2 className={`text-2xl font-bold `}>{PricesBlockContent[locale].title}</h2>
                    <p className={`mt-4`}>{PricesBlockContent[locale].description}</p>
                    <Link href={routesAdaptive.pricing.root} className={`mt-4 px-4 py-2 bg-buttonContainer w-fit rounded-large`}>{PricesBlockContent[locale].buttonText}</Link>
                </div>
                <div className={`flex justify-center items-center`}>
                    <Image src={MedicineWomen} alt="Medicine Women" />
                </div>

            </div>

        </div>
    )
}
