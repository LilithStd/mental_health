'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/sad_human_with_problem.png'
import CloudCartoonVisualizationProblem from '@/public/images/problems/cloudCartoon2.png'
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

        // 👇 ВАЖНО: вручную задаём reference
        if (el) {
            refs.setReference(el);
        }
    }
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
    }
    return (
        <div className={`flex flex-col gap-4 justify-center relative items-center`}>
            <div className={`grid grid-cols-1 gap-2 justify-center items-center text-center rounded-large p-6`}>

                <h2 className={`text-5xl p-4 font-pattaya font-bold `}>{AnalizeUserProblemContent[locale].TITLE}</h2>
                <div className="flex gap-2 w-full justify-center items-center flex-wrap">
                    {AnalizeUserProblemContent[locale].PROBLEMS.map((problem, index) => (

                        <div
                            key={index}
                            className="relative w-60 min-h-40 p-4 rounded-large flex justify-center items-center"
                            ref={refs.setReference}
                            onClick={(e) => openModalWindowHandler(index, e.currentTarget)}
                        >
                            {isOpenModalWindow && activeIndex === index &&
                                <div
                                    ref={refs.setFloating}
                                    style={{
                                        ...floatingStyles,
                                        background: "white",
                                        border: "1px solid #ccc",
                                        padding: 10,
                                        borderRadius: 8,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                        zIndex: 10,
                                    }}
                                >
                                    Я popup 🚀
                                </div>
                            }

                            <Image
                                src={CloudCartoonVisualizationProblem}
                                alt="Cloud"
                                fill
                                className="object-cover rounded-large"
                            />

                            <button className="p-2 relative z-10 rounded-large cursor-pointer text-center wrap-break-word">
                                {problem}
                            </button>

                        </div>

                    ))}
                </div>
            </div>
            <div className={`flex justify-center items-center`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' rounded-large' />
            </div>
            <div className={`flex w-full flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-4xl font-pattaya font-bold `}>{AnalizeUserProblemContent[locale].TITLE_2}</h2>
                <Link href={routesAdaptive.consultation.root} className={`p-4 justify-center items-center bg-buttonContainer rounded-large cursor-pointer font-jura font-bold w-fit`}>{AnalizeUserProblemContent[locale].SIGN_UP_BUTTON}</Link>

            </div>
        </div>
    )
}
