'use client'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import { ProblemSolvingBlockContent } from '@/translate/mainPage/ProblemSolvingBlock'
import Image from 'next/image'
import { useState } from 'react'

export default function ProblemSolvingBlock() {
    const localeAdapted = useLocale() as LocaleType
    const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);
    const selectedProblemHandler = (index: number) => {
        if (selectedProblemIndex === index) {
            setSelectedProblemIndex(null);
            return;
        }
        setSelectedProblemIndex(index);
    }
    // components
    const popUpWindowComponent = (description: string) => {
        return (
            <div className={`absolute bg-white border border-gray-300 rounded-lg p-4 w-64 z-10`}>
                <span>{description}</span>
            </div>
        )
    }
    // const probmlemSolvingBlock = () => {
    //     return (
    //         <div className={`grid grid-cols-2 gap-4 items-start`}>
    //             {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
    //                 <details key={index} className={`font-jura font-bold mb-4 bg-buttonContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
    //                     <summary className={`text-lg font-jura font-bold mb-2 cursor-pointer `}>
    //                         <span>{problem.problem}</span>
    //                     </summary>
    //                     <p>{problem.description}</p>
    //                 </details>
    //             ))}
    //         </div>
    //     )
    // }

    const probmlemSolvingBlock = () => {
        return (
            <div className={`grid grid-cols-2 gap-4 items-start`}>
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <div key={index} className={` font-bold mb-4 ${problem.color} p-4 rounded-large transition-all duration-300 hover:brightness-110 hover:scale-105 cursor-pointer min-h-40`} onClick={() => selectedProblemHandler(index)}>
                        <p className={`flex flex-col w-60   cursor-pointer `}>
                            <span className={`text-xl font-bold `}>{problem.problem}</span>
                            {selectedProblemIndex === index && popUpWindowComponent(problem.description)}
                            {/* <span className={`w-full mt-2 ${selectedProblemIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>{selectedProblemIndex === index ? problem.description : ''}</span> */}
                        </p>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <div className={`flex flex-col gap-6 justify-center items-center w-full bg-primary-color/20 rounded-large p-6 shadow-lg backdrop-blur-md`}>
            <div className={``}></div>
            <h2 className={`text-3xl mb-4 font-bold `}>{ProblemSolvingBlockContent[localeAdapted].title}</h2>
            {probmlemSolvingBlock()}

            {/* <div className={`grid items-center justify-end rounded-large p-4`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' p-4 rounded-large' />
            </div> */}
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
