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
            <div className={`
                        absolute 
                        font-bold 
                        ${color}
                        rounded-large 
                        transition-all  
                        duration-300 
                        z-100
                        cursor-pointer`}>
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
            <div className="flex flex-col gap-4 items-start relative">
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <div
                        key={index}
                        onClick={() => selectedProblemHandler(index)}
                        className={`
                        cursor-pointer 
                        p-4 
                        flex
                        min-w-80
                        rounded-large 
                        ${problem.color}
                        max-w-164
                        transition-all duration-300
                        ${selectedProblemIndex === index ? 'absolute' : ''}
                        `}
                    >
                        <h3 className="font-bold">{problem.problem}</h3>

                        {selectedProblemIndex === index && (
                            <p className="mt-2">{problem.description}</p>
                        )}

                    </div>

                ))}
            </div>
        )
    }
    const probmlemSolvingBlockPreviewRealesation = () => {
        return (
            <div className="grid grid-cols-2 gap-4 items-start grid-flow-row-dense">
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (

                    <div
                        key={index}
                        onClick={() => selectedProblemHandler(index)}
                        className={`
                        cursor-pointer 
                        p-4 
                        min-w-80
                        rounded-large 
                        ${problem.color}
                        max-w-164
                        transition-all duration-300
                        ${selectedProblemIndex === index ? 'col-span-2 col-start-1' : 'col-span-1'}
                        `}
                    >
                        <h3 className="font-bold">{problem.problem}</h3>

                        {selectedProblemIndex === index && (
                            <p className="mt-2">{problem.description}</p>
                        )}

                    </div>

                ))}
            </div>
        )
    }


    return (
        <div className={`flex flex-col gap-6 justify-center items-center w-full bg-primary-color/20 rounded-large p-6 shadow-lg backdrop-blur-md border border-primary-color/30`}>
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
