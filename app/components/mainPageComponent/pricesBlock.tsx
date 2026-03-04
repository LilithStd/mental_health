import { routes } from '@/app/helpers/helpersFunctions'
import MedicineWomen from '@/public/images/doctor/doctor_5.png'
import Image from 'next/image'
import Link from 'next/link'

export default function PricesBlock() {
    return (
        <div className={`flex gap-4 p-6 justify-center items-center`}>
            <div className={`grid grid-cols-2 p-6 justify-center items-center`}>
                <div className={`flex flex-col gap-4`}>
                    <h2 className={`text-2xl font-bold `}>Prices Block</h2>
                    <p className={`mt-4`}>Discover our affordable pricing options for mental health consultations and services.</p>
                    <Link href={routes.pricing.root} className={`mt-4 px-4 py-2 bg-buttonContainer w-fit rounded-large`}>View Pricing</Link>
                </div>
                <div className={`flex justify-center items-center`}>
                    <Image src={MedicineWomen} alt="Medicine Women" />
                </div>

            </div>

        </div>
    )
}
