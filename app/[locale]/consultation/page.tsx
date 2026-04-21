'use client';
import ConsultationForm from "@/app/components/consultation/consultationForm";
import { CONSULTATION_TYPE } from "@/app/globalConsts/globalEnum";
import { useState } from "react";


export default function Consultation() {
    // stores
    // functions

    // states
    const [methodToConsult, setMethodToConsult] = useState(CONSULTATION_TYPE.MAIN)
    // components
    const methodToChangeTypeConsultationComponent = () => {

        return (
            <div className={`flex gap-4 p-4 justify-center`}>
                <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.MAIN)} className={`bg-primary-color/50 rounded-large p-2`}>Main</button>
                <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.ADDITIONAL)} className={`bg-primary-color/50 rounded-large p-2`}>Additional</button>
            </div>
        )
    }

    return (
        <div className={`flex flex-col indents-main-container  rounded-medium flex-1 items-center`}>
            <div className={`flex flex-col w-full  max-w-6xl bg-primary-color/20 border border-primary-color/20 rounded-large `}>
                 {methodToChangeTypeConsultationComponent()}
                {methodToConsult === CONSULTATION_TYPE.MAIN && <ConsultationForm />}
            </div>
           
        </div>
    )
}
