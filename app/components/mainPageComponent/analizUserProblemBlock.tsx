
import HumanWithProblem from '@/public/images/problems/sad_human_with_problem.png'
import Image from 'next/image'

export default function AnalizUserProblemBlock() {
    return (
        <div>
            <Image src={HumanWithProblem} alt="Human with Problem" className=' rounded-large' />
        </div>
    )
}
