'use client'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import { ProblemSolvingBlockContent } from '@/translate/mainPage/ProblemSolvingBlock'
import Image from 'next/image'

export default function ProblemSolvingBlock() {
    const localeAdapted = useLocale() as LocaleType
    // components
    const probmlemSolvingBlock = () => {
        return (
            <div>
                {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <details key={index} className={`list-disc list-inside font-jura font-bold mb-4 bg-buttonContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                        <summary>
                            <span>{problem.problem}</span>
                        </summary>
                        <p>{problem.description}</p>
                    </details>
                ))}
            </div>
        )
    }

    return (
        <div className={`grid grid-cols-2 w-full rounded-large p-6`}>
            <div className={`grid items-start justify-start rounded-large p-4`}>
                <h2 className={`text-3xl mb-4 font-pattaya font-bold `}>{ProblemSolvingBlockContent[localeAdapted].title}</h2>
                {probmlemSolvingBlock()}
            </div>
            <div className={`grid items-center justify-end rounded-large p-4`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' p-4 rounded-large' />
            </div>
        </div>
    )
}
