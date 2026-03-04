
import { routes } from '@/app/helpers/helpersFunctions'
import HumanWithProblem from '@/public/images/problems/sad_human_with_problem.png'
import Image from 'next/image'
import Link from 'next/link'

const problemsList = [
    'Persistent anxiety for more than 2 weeks',
    'Depressive symptoms lasting more than 2 weeks',
    'Significant changes in sleep or appetite',
    'Difficulty concentrating or making decisions',
    'Feelings of hopelessness or worthlessness',
    'Thoughts of self-harm or suicide'
]

export default function AnalizUserProblemBlock({ locale }: { locale: string }) {
    const routesAdaptive = routes(locale)
    return (
        <div>
            <div className={`grid grid-cols-1 gap-4 justify-center items-center text-center rounded-large bg-subContainer p-6`}>
                <h2 className={`text-2xl font-bold `}>When should you see a psychiatrist?</h2>
                <div className={`flex gap-2`}>
                    {problemsList.map((problem, index) => (
                        <button key={index} className={`p-2 w-fit bg-buttonContainer rounded-large cursor-pointer`}>{problem}</button>
                    ))}
                </div>
            </div>
            <div className={`flex justify-center items-center`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' rounded-large' />
            </div>
            <div className={`flex w-full flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-2xl font-bold `}>Did you recognize yourself?</h2>
                <Link href={routesAdaptive.consultation.root} className={`p-4 justify-center items-center bg-buttonContainer rounded-large cursor-pointer w-fit`}>Sign Up for a Consultation</Link>

            </div>
        </div>
    )
}
