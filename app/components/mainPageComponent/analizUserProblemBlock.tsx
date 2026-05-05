'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import ButterFlyBGImage from '@/public/images/background/butterFlyBG(edit).png'
import { AnalizeUserProblemContent } from '@/translate/mainPage/analiazeUserProblemBlock'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react'


export default function AnalizUserProblemBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    // state
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const { refs, floatingStyles } = useFloating({
        open: isOpenModalWindow,
        onOpenChange: setIsOpenModalWindow,
        middleware: [
            offset(8), // отступ от кнопки
            flip(),    // переворачивает если не влезает
            shift(),   // сдвигает в пределах экрана
        ],
        whileElementsMounted: autoUpdate,
    });
    //
    // functions
    // handlers
    const openModalWindowHandler = (index: number, el: HTMLElement | null) => {
        setIsOpenModalWindow(true);
        if (activeIndex === index) {
            setActiveIndex(null);
            return;
        }

        setActiveIndex(index);

        if (el) {
            refs.setReference(el);
        }
    }
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
    }

    const popUpWindowComponent = (description: string) => {
        return (
            <div
                ref={refs.setFloating}
                style={{
                    ...floatingStyles,
                    background: "white",
                    border: "1px solid #ccc",
                    padding: 10,
                    borderRadius: 8,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    zIndex: 100,
                }}
            >
                {description}
            </div>
        )
    }

    const selectedProblem = (content: string) => {
        return (
            <div className={`absolute  mt-2 w-[700] bg-white rounded-medium shadow-lg p-4 z-10`}>
                {content}
            </div>
        )
    }

    return (
        <div className={`flex flex-col gap-4 justify-center relative items-center bg-primary-color/20 rounded-large p-6 shadow-lg backdrop-blur-md w-full border border-primary-color/30`}>
            <div className={`grid grid-cols-1 gap-2 justify-center items-center text-center rounded-large p-6`}>

                <h2 className={`text-5xl p-4 font-geistSans font-bold `}>{AnalizeUserProblemContent[locale].TITLE}</h2>
                <div className="flex gap-2 w-full justify-center items-center flex-wrap">
                    {selectedProblem('lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')}
                    {AnalizeUserProblemContent[locale].PROBLEMS.map((problem, index) => (

                        <div
                            key={index}
                            className="relative w-60 min-h-40 p-4 rounded-large flex justify-center items-center "
                            ref={refs.setReference}
                            onClick={(e) => openModalWindowHandler(index, e.currentTarget)}
                        >
                            {/* {isOpenModalWindow && activeIndex === index && popUpWindowComponent(problem.description)} */}




                            <div className={` cursor-pointer`}>
                                <div className={`relative  w-full h-32 rounded-large  flex justify-center items-center bg-primary-color/50 p-4 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : 'border border-primary-color/30'} border border-primary-color/30 cursor-pointer transition-transform duration-300 ${activeIndex === index ? 'scale-105 z-1000 ' : ''}`}>
                                    <button className={`transition-blur  duration-100 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : ''} ${activeIndex === index && 'scale-105 flex w-full  '} p-2 z-200`}>
                                        {problem.symptom}
                                        
                                    </button>
                                    {/* {isOpenModalWindow && activeIndex === index && selectedProblem(problem.description)} */}
                                    
                                </div>

                            </div>



                        </div>

                    ))}
                </div>
            </div>            
            <div className={`flex w-full flex-col gap-4 p-6 justify-center items-center text-center rounded-large `}>
                <h2 className={`text-4xl font-geistSans font-bold `}>{AnalizeUserProblemContent[locale].TITLE_2}</h2>
                <Link href={routesAdaptive.consultation.root} className={`p-4 justify-center items-center bg-buttonContainer rounded-large cursor-pointer font-geistSans font-bold w-fit z-10`}>{AnalizeUserProblemContent[locale].SIGN_UP_BUTTON}</Link>

            </div>
            <Image src={ButterFlyBGImage} alt="Butterfly Background" fill className='rounded-large object-cover opacity-30 z-0' />
        </div>
    )
}
