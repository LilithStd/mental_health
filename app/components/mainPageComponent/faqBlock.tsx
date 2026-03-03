import { routes } from "@/app/helpers/helpersFunctions";
import Link from "next/link";


export default function FaqBlock() {
    return (
        <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
            <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-2xl font-bold `}>FAQ Block</h2>
                <p className={`mt-4`}>Find answers to common questions about our mental health services and consultations.</p>

                <ul className={`list-disc list-inside mt-4`}>
                    <li className={`mt-2`}>What types of mental health services do you offer?</li>
                    <li className={`mt-2`}>How can I schedule a consultation?</li>
                    <li className={`mt-2`}>What should I expect during a consultation?</li>
                    <li className={`mt-2`}>Do you offer telehealth consultations?</li>
                    <li className={`mt-2`}>What are your pricing options for consultations and services?</li>
                </ul>
            </div>
            <Link href={routes.faq.root} className={`mt-4 px-4 py-2 bg-buttonContainer w-fit rounded-large`}>View FAQ</Link>
        </div>
    )
}
