'use client'
import Image from 'next/image';
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import DoctorPricing from '@/public/images/doctor/doctor.png'
import { PricesPageContent } from '@/translate/pricesPage/pricePage';

export default function PricingPage() {
    const locale = useLocale() as LocaleType
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <h2 className={`text-2xl justify-center text-center font-bold`}>{PricesPageContent[locale].title}</h2>
                <p className={`text-center mt-2`}>{PricesPageContent[locale].description}</p>
                <div className={`grid grid-cols-2 gap-4 mt-4 justify-center`}>

                    <div>
                        <Image src={DoctorPricing} alt="Doctor Pricing" className='w-100 p-4 rounded-large' />
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        {PricesPageContent[locale].list.map((item, index) => (
                            <div key={index}>
                                <h2 className={`text-xl font-bold`}>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}
