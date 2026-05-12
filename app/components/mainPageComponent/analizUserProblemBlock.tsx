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
import AppImage from '../shared/appImage'
import { UPLOAD_IMAGE_NAME } from '@/app/globalConsts/globalConsts'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'


export default function AnalizUserProblemBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    // state
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [selectedProblemContent, setSelectedProblemContent] = useState<string | null>(null);


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
            setSelectedProblemContent(null);
            return;
        }

        setActiveIndex(index);
        setSelectedProblemContent(AnalizeUserProblemContent[locale].PROBLEMS[index].description);

        if (el) {
            refs.setReference(el);
        }
    }
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
        setActiveIndex(null);
        setSelectedProblemContent(null);
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

    const oldComponentRelease = <div className={`flex flex-col gap-4 justify-center relative items-center bg-primary-color/20 rounded-large p-6 shadow-lg backdrop-blur-md w-full border border-primary-color/30`}>
            <div className={`grid grid-cols-1 gap-2 justify-center items-center text-center rounded-large p-6`}>

                <h2 className={`text-5xl p-4 font-geistSans font-bold `}>{AnalizeUserProblemContent[locale].TITLE}</h2>
                <div className="flex gap-2 w-full justify-center items-center flex-wrap">
                    {/* {isOpenModalWindow && selectedProblemContent !== null && selectedProblem(selectedProblemContent)} */}
                    {AnalizeUserProblemContent[locale].PROBLEMS.map((problem, index) => (

                        <div
                            key={index}
                            className="relative w-60 min-h-40 p-4 rounded-large flex justify-center items-center "
                            ref={refs.setReference}
                            onClick={(e) => (
                                openModalWindowHandler(index, e.currentTarget)
                                
                            )}
                        >
                            {isOpenModalWindow && activeIndex === index && popUpWindowComponent(problem.description)}




                            <div className={` cursor-pointer`}>
                                <div className={`relative  w-full h-32 rounded-large  flex justify-center items-center bg-primary-color/50 p-4 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : 'border border-primary-color/30'} border border-primary-color/30 cursor-pointer transition-transform duration-300 ${activeIndex === index ? 'scale-105 z-1000 ' : ''}`}>
                                    <button className={`transition-blur  duration-100 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : ''} ${activeIndex === index && 'scale-105 flex w-full  '} p-2 z-200`}>
                                        {problem.symptom}
                                        
                                    </button>
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
    const newComponentRelease = <div className={`grid grid-cols-6 gap-2 p-4 justify-center relative  bg-primary-color/20 rounded-large shadow-lg backdrop-blur-md w-full border border-primary-color/30`}>
        <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={UPLOAD_IMAGE_NAME.global.mainPage.tests.butterFlyViolet} width={1280} height={1024} alt="Butterfly Background" className='rounded-large object-cover opacity-30 z-0 col-span-6' />
        {/* {AnalizeUserProblemContent[locale].PROBLEMS.map((problem, index) => (

            <div
                key={index}
                className="relative cursor-pointer rounded-large flex justify-center items-center "
                ref={refs.setReference}
                onClick={(e) => (
                    openModalWindowHandler(index, e.currentTarget)
                    
                )}
            >
                {isOpenModalWindow && activeIndex === index && popUpWindowComponent(problem.description)}
                <div className={` cursor-pointer`}>
                    <div className={`grid h-32  rounded-large justify-center items-center bg-primary-color/50 p-4 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : 'border border-primary-color/30'} border border-primary-color/30 cursor-pointer transition-transform duration-300 ${activeIndex === index ? 'scale-105 z-1000 ' : ''}`}>
                        <button className={`grid transition-blur  duration-100 ${activeIndex !== null && activeIndex !== index ? 'blur-sm' : ''} ${activeIndex === index && 'scale-105 '} p-2 z-200`}>
                            {problem.symptom}
                            
                        </button>
                    </div>

                </div>

            </div>

        ))} */}
    </div>
            

    return (
        <div className={`flex flex-col flex-1 items-center`}>
            <div className={`flex flex-col p-4 w-full flex-1  max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/30  items-center justify-start gap-4`}>
                {newComponentRelease}
            </div>
        </div>
    )
}
