'use client'
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/sad_human_with_problem.png'
import CloudCartoonVisualizationProblem from '@/public/images/problems/cloudCartoon2.png'
import { AnalizeUserProblemContent } from '@/translate/mainPage/analiazeUserProblemBlock'
import Image from 'next/image'
import Link from 'next/link'


export default function AnalizUserProblemBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    return (
        <div>
            <div className={`grid grid-cols-1 gap-2 justify-center items-center text-center rounded-large p-6`}>

                <h2 className={`text-2xl font-bold `}>{AnalizeUserProblemContent[locale].TITLE}</h2>
                <div className="flex gap-2 w-full justify-center items-center flex-wrap">
                    {AnalizeUserProblemContent[locale].PROBLEMS.map((problem, index) => (

                        <div
                            key={index}
                            className="relative w-60 min-h-40 p-4 rounded-large flex justify-center items-center"
                        >

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
                <h2 className={`text-2xl font-bold `}>{AnalizeUserProblemContent[locale].TITLE_2}</h2>
                <Link href={routesAdaptive.consultation.root} className={`p-4 justify-center items-center bg-buttonContainer rounded-large cursor-pointer w-fit`}>{AnalizeUserProblemContent[locale].SIGN_UP_BUTTON}</Link>

            </div>
        </div>
    )
}
