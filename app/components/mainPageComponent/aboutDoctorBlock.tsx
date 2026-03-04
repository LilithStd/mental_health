import { routes } from '@/app/helpers/helpersFunctions'
import DoctorImage from '@/public/images/doctor/doctor_2.png'
import Image from 'next/image'

export default function AboutDoctorBlock({ locale }: { locale: string }) {
    const routesAdaptive = routes(locale)
    return (
        <div>
            <div className={`grid grid-cols-2 rounded-large bg-subContainer p-6`}>
                <div className={`flex justify-center items-center mt-4`}>
                    <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' />
                </div>
                <div className={`flex flex-col gap-4 p-6`}>
                    <h2 className={`text-2xl font-bold `}>About Doctor</h2>
                    <p>Hi! My name is Dr. John Smith!</p>
                    <div>
                        <h3 className={`text-xl font-semibold mt-4`}>My Background and Experience:</h3>
                        <p className={`text-sm mt-2`}>I am a licensed psychiatrist with over 10 years of experience in the field of mental health. I have worked with patients of all ages and backgrounds, and I specialize in treating anxiety, depression, and trauma-related disorders. I am committed to providing compassionate and evidence-based care to my patients.</p>
                    </div>

                    <div>
                        <h3 className={`text-xl font-semibold mt-4`}>My Approach to Treatment:</h3>
                        <p className={`text-sm mt-2`}>I believe in a holistic approach to mental health care, which includes a combination of therapy, medication management, and lifestyle modifications. I work closely with my patients to develop personalized treatment plans that address their unique needs and goals.</p>
                    </div>
                    <div>
                        <h3 className={`text-xl font-semibold mt-4`}>My Philosophy on Mental Health:</h3>
                        <p className={`text-sm mt-2`}>I believe that mental health is just as important as physical health, and that seeking help for mental health concerns is a sign of strength. I am passionate about reducing the stigma surrounding mental illness and promoting mental wellness for all individuals.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
