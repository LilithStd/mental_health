
import { routes } from '@/app/helpers/helpersFunctions'
import DoctorImage from '@/public/images/doctor/doctor_6.png'
import Image from 'next/image'
import Link from 'next/link'

const listPriviliges = [
    'confidentiality and privacy',
    'personalized care',
    'access to resources',
    'supportive community',
]

export default function WelcomeBlock() {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4 `}>
            <Image src={DoctorImage} alt="Doctor Image" className='rounded-large' />
            <div>
                <h2 className={`text-2xl font-bold `}>Welcome to Our Mental Health Platform</h2>
                <p className={``}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas corporis explicabo eius facilis sunt, dolor laudantium dolores sapiente tempora, magnam asperiores fuga esse itaque molestias quidem beatae modi sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor deserunt quos, dignissimos ipsa corrupti, expedita recusandae harum at necessitatibus atque illum voluptatibus obcaecati voluptates! Iure molestias veniam maxime accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur veniam incidunt quas alias rerum, reiciendis vero praesentium at sunt accusamus, inventore provident accusantium voluptas aliquam deserunt pariatur, ipsum asperiores dolorem!</p>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>Already know  your problem?</h3>
                    <Link href={routes.consultation.root} className={`mt-4 px-4 py-2 w-fit bg-buttonContainer rounded-large`}>Sign Up for a Consultation</Link>
                </div>
                <div className={`flex flex-col gap-4 mt-6`}>
                    <h3 className={`text-xl font-semibold mt-4`}>Need some guidance?</h3>
                    <Link href={routes.tests.root} className={`mt-4 px-4 w-fit py-2 bg-buttonContainer rounded-large`}>Go to Tests</Link>
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
