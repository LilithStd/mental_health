'use client'
import { useLocale } from '@/app/hooks/useLocale'
import { LocaleType } from '@/app/types/types'
import HumanWithProblem from '@/public/images/problems/problems_in_words.png'
import { ProblemSolvingBlockContent } from '@/translate/mainPage/ProblemSolvingBlock'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import AppImage from '../shared/appImage'
import { IMAGES_UPLOAD_PATH } from '@/app/globalConsts/globalEnum'
import { UPLOAD_IMAGE_NAME } from '@/app/globalConsts/globalConsts'

export default function ProblemSolvingBlock() {
    const localeAdapted = useLocale() as LocaleType;
    const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);
    const [hoveredProblem, setHoveredProblem] = useState<string>();
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
            <div className="flex gap-4 m-20  items-start relative">
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={UPLOAD_IMAGE_NAME.global.mainPage.problemSolvingBlock.brainImage} width={600} height={600} alt="Human with Problem" className=' p-4 rounded-large z-1' />
                    <button  
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] top-50 left-120 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[0].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[0].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[0].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[0].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] -top-10 left-115 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[1].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[1].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[1].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[1].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] top-58 -left-20 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[2].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[2].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[2].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[2].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] top-8 -left-18 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[3].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[3].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[3].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[3].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] top-8 -left-18 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[3].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[3].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[3].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[3].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] -top-20 left-51 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[4].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[4].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[4].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[4].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] -top-20 left-51 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[4].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[4].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[4].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[4].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                    <button 
                        className={`absolute hover:scale-200 hover:z-100 w-[200px] h-[200px] -bottom-20 left-55 z-0 rounded-full ${ProblemSolvingBlockContent[localeAdapted].problems[5].color} font-bold`}
                        onMouseEnter={() => setHoveredProblem(ProblemSolvingBlockContent[localeAdapted].problems[5].description)}
                        onMouseLeave={() => setHoveredProblem('')}
                    >
                        {ProblemSolvingBlockContent[localeAdapted].problems[5].problem}
                        {hoveredProblem === ProblemSolvingBlockContent[localeAdapted].problems[5].description && (
                                <p className={`text-[6px] p-2`}>{hoveredProblem}</p>
                        )}
                    </button>
                     
                     
            
                {/* {ProblemSolvingBlockContent[localeAdapted].problems.map((problem, index) => (
                    <div
                        key={index}
                        onClick={() => selectedProblemHandler(index)}
                        className={`
                        cursor-pointer 
                        p-4 
                        flex
                        
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

                ))} */}
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
