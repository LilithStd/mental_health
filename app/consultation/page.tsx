'use client'

import ConsultationForm from "../components/consultation/consultationForm";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

export default function Consultation() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);

    return (
        <div className={`flex flex-col bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main}`}>
            <h2>Consultation</h2>
            <ConsultationForm />
        </div>
    )
}
