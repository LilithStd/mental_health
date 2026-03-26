'use client'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import { ProblemSolvingBlockContent } from '@/translate/mainPage/ProblemSolvingBlock'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function ProblemSolvingBlock() {
    const localeAdapted = useLocale() as LocaleType;
    const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);
    const selectedProblemHandler = (index: number) => {
        if (selectedProblemIndex === index) {
            setSelectedProblemIndex(null);
            return;
        }
        setSelectedProblemIndex(index);
    }
    const closeProblemPopupHandler = () => {
        setSelectedProblemIndex(null);
    }
    // components
    const ProblemModal = ({ problem, onClose }: { problem: { problem: string, description: string }, onClose: () => void }) => {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={onClose}
                />

                <div className="relative bg-white p-6 rounded-large w-[400px] z-50">
                    <h2 className="text-xl font-bold">{problem.problem}</h2>
                    <p className="mt-2">{problem.description}</p>
                </div>
            </div>
        );
    }
    const popUpWindowComponent = (color: string, description: string) => {
        return (
            <div className={`absolute scale-150 rounded-lg p-4 w-64 z-100 ${color}`}>
                <span>{description}</span>
            </div>
        )
    }
    const probmlemSolvingBlockOld = () => {
        return (
            <div className={`grid grid-cols-2 gap-4 items-start`}>
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <details key={index} className={`font-jura font-bold mb-4 bg-buttonContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                        <summary className={`text-lg font-jura font-bold mb-2 cursor-pointer `}>
                            <span>{problem.problem}</span>
                        </summary>
                        <p>{problem.description}</p>
                    </details>
                ))}
            </div>
        )
    }

    const probmlemSolvingBlock = () => {
        return (
            <div className={`grid grid-cols-2 gap-4 items-start`}>
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <div
                        key={index}
                        onClick={() => selectedProblemHandler(index)}
                        className={`
                        font-bold 
                        p-4
                        min-h-[120px]
                        rounded-large 
                        transition-all  
                        duration-300 
                        cursor-pointer
                        ${problem.color}`}
                    >
                        <span className="text-xl">{problem.problem}</span>

                        {selectedProblemIndex === index && (
                            <p className="mt-2">{problem.description}</p>
                        )}
                    </div>

                ))}

            </div>
        )
    }


    return (
        <div className={`flex flex-col gap-6 justify-center items-center w-full bg-primary-color/20 rounded-large p-6 shadow-lg backdrop-blur-md`}>
            <h2 className={`text-3xl mb-4 font-bold `}>{ProblemSolvingBlockContent[localeAdapted].title}</h2>
            {probmlemSolvingBlock()}
        </div>
        // <div className={`grid grid-cols-2 w-full rounded-large p-6`}>
        //     <div className={`grid items-start justify-start rounded-large p-4`}>
        //         <h2 className={`text-3xl mb-4 font-pattaya font-bold `}>{ProblemSolvingBlockContent[localeAdapted].title}</h2>
        //         {probmlemSolvingBlock()}
        //     </div>
        //     <div className={`grid items-center justify-end rounded-large p-4`}>
        //         <Image src={HumanWithProblem} alt="Human with Problem" className=' p-4 rounded-large' />
        //     </div>
        // </div>
    )
}
