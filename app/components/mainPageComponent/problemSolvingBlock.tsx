'use client'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import { ProblemSolvingBlockContent } from '@/translate/mainPage/ProblemSolvingBlock'
import Image from 'next/image'

export default function ProblemSolvingBlock() {
    const localeAdapted = useLocale() as LocaleType
    // components
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
                    <div key={index} className={` font-bold mb-4 bg-buttonContainer p-4 rounded-large hover:bg-hover cursor-pointer min-h-40`}>
                        <p className={`text-lg font-bold  cursor-pointer `}>
                            <span>{problem.problem}</span>
                        </p>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <div>
            <div className={`flex w-full rounded-large p-6`}></div>
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
