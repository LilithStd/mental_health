import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface BackgroundImagesProps {
    children: React.ReactNode;
    imageSrc: StaticImageData;
}
export default function BackgroundImages({ children, imageSrc }: BackgroundImagesProps) {
    return (
        <div className={`flex max-w-6xl justify-between items-center w-full relative  bg-subContainer rounded-large`}>
            <div className={`flex w-full h-full justify-between items-center relative z-1`}>
                {children}
            </div>
            <Image src={imageSrc} alt="Background Image" className="absolute z-0 w-full h-full object-cover rounded-large opacity-70" />
        </div>
    )
}
