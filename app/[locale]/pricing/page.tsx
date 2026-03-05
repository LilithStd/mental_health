
import Image from 'next/image';
import DoctorPricing from '@/public/images/doctor/doctor.png'

export default function PricingPage() {
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <h2 className={`text-2xl justify-center text-center font-bold`}>Our Pricing</h2>
                <div className={`grid grid-cols-2 gap-4 mt-4 justify-center`}>

                    <div>
                        <Image src={DoctorPricing} alt="Doctor Pricing" className='w-100 p-4 rounded-large' />
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        <div className={`flex flex-col gap-4`}>
                            <h2 className={`text-xl font-bold`}>Basic Plan</h2>
                            <p>Our Basic Plan offers essential mental health support, including access to a licensed therapist for one session per month. This plan is ideal for individuals seeking occasional guidance and support for managing stress, anxiety, or other mental health concerns.</p>
                        </div>
                        <div>
                            <h2 className={`text-xl font-bold`}>Premium Plan</h2>
                            <p>Our Premium Plan provides comprehensive mental health support, including access to a licensed therapist for weekly sessions, personalized treatment plans, and 24/7 support. This plan is designed for individuals seeking ongoing support and guidance for managing more complex mental health issues.</p>
                        </div>
                        <div>
                            <h2 className={`text-xl font-bold`}>Consultation Services</h2>
                            <p>In addition to our Basic and Premium Plans, we also offer consultation services for individuals seeking specific advice or guidance on mental health concerns. Our consultations are conducted by licensed therapists and can be scheduled on an as-needed basis.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
