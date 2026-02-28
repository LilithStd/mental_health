import Image from "next/image"
import BackgroundImages from "../shared/backgroundImages"
import lastStepBg from "@/public/images/problems/problem_human.png"


export default function LastStepBlock() {
    return (
        <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
            {/* <BackgroundImages imageSrc={lastStepBg}> */}
            <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-2xl font-bold `}>Last Step Block</h2>
                <p className={`mt-4`}>Take the final step towards improving your mental health and well-being with our comprehensive services and support.</p>
                <button className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large`}>Go to Consultation</button>
            </div>
            <Image src={lastStepBg} alt="Last Step Background" className='cover  rounded-large' />
            {/* </BackgroundImages> */}
        </div>
    )
}
