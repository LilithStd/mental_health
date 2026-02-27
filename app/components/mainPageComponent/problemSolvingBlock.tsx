
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import Image from 'next/image'

const problemsList = [
    'Anxiety and Stress',
    'Depression and Mood Disorders',
    'Relationship Issues',
    'Self-esteem and Confidence',
    'Grief and Loss',
    'Trauma and PTSD',
    'Work-related Stress',
    'Addiction and Substance Abuse'
]
export default function ProblemSolvingBlock() {
    return (
        <div className={`grid grid-cols-2 rounded-large bg-subContainer p-6`}>
            <div>
                <h2 className={`text-2xl font-bold `}>What problems do I work with and solve?</h2>
                {problemsList.map((problem, index) => (
                    <div key={index} className={`flex items-center mt-2`}>
                        <span className={`w-2 h-2 bg-activeElement rounded-full mr-2`}></span>
                        <div>

                            <div>
                                {/* <span>Dont know much about this?</span> */}
                                <button className={`text-sm bg-buttonContainer rounded-circle p-2 cursor-pointer`}><span>{problem}</span></button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className={`flex items-center justify-end`}>
                <Image src={HumanWithProblem} alt="Human with Problem" className=' rounded-large' />
            </div>
        </div>
    )
}
