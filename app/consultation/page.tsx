'use client'

import Form from "../components/consultation/form";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

export default function Consultation() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);

    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main}`}>
            <h2>Consultation</h2>
            <Form />
        </div>
    )
}
