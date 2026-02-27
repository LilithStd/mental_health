
import DoctorImage from '@/public/images/doctor/doctor_2.png'
import Image from 'next/image'

export default function WelcomeBlock() {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6   w-full p-4 `}>
            <Image src={DoctorImage} alt="Doctor Image" className='h-150 rounded-large' />
            <div>
                <h2 className={`text-2xl font-bold `}>Welcome to Our Mental Health Platform</h2>
                <p className={``}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas corporis explicabo eius facilis sunt, dolor laudantium dolores sapiente tempora, magnam asperiores fuga esse itaque molestias quidem beatae modi sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor deserunt quos, dignissimos ipsa corrupti, expedita recusandae harum at necessitatibus atque illum voluptatibus obcaecati voluptates! Iure molestias veniam maxime accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur veniam incidunt quas alias rerum, reiciendis vero praesentium at sunt accusamus, inventore provident accusantium voluptas aliquam deserunt pariatur, ipsum asperiores dolorem!</p>
            </div>

        </div>
    )
}
