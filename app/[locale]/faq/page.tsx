'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { FaqContent } from "@/translate/faqPage/faqContent";

export default function FaqPage() {
    const locale = useLocale() as LocaleType
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <div className={`flex flex-col items-center mb-8`}>
                    <h2>F.A.Q </h2>
                    <h2>(Frequently Asked Questions)</h2>
                </div>
                {FaqContent[locale].listsQuestions.map((faq, index) => (
                    <details key={index} className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                        <summary className={``}>{faq.question}</summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
                {/* <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>What is the difference between a psychiatrist and a psychologist or psychotherapist?</summary>
                    <p>
                        Whats the difference between a psychiatrist and a psychologist or psychotherapist?

                        A psychiatrist is a physician with a medical degree. They can diagnose, prescribe medication, and write prescriptions.
                        A psychologist is not a physician and does not prescribe medication.
                        A psychotherapist is a specialist who practices psychotherapy; in some countries, they are considered physicians, but in others, they are not.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>What conditions do psychiatrists treat?</summary>
                    <p>
                        Will I necessarily be prescribed medication?

                        No. Medication is prescribed only when indicated.
                        In many cases, psychotherapy, observation, or a comprehensive approach may be sufficient. The decision is made jointly with the patient.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>Will I necessarily be prescribed medication?</summary>
                    <p>
                        Will I necessarily be prescribed medication?

                        No. Medication is prescribed only when indicated.
                        In many cases, psychotherapy, observation, or a comprehensive approach may be sufficient. The decision is made jointly with the patient.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>Is the consultation confidential?</summary>
                    <p>
                        Yes. All information is strictly confidential and will not be shared with third parties, except in cases required by law (for example, in cases of life-threatening situations).
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>What does the initial consultation involve?</summary>
                    <p>
                        The initial consultation usually lasts 50–60 minutes. We discuss symptoms, medical history, lifestyle, and, if necessary, develop a treatment or monitoring plan.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>How long does treatment last?</summary>
                    <p>
                        The duration depends on the diagnosis and individual circumstances.
                        Some conditions require short-term support, while others require longer-term monitoring.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>Is it possible to get help online?</summary>
                    <p>
                        No. If you feel distressed, anxious, or if your condition is interfering with your life, that is sufficient reason to contact us. A diagnosis is made during the consultation.
                    </p>
                </details>
                <details className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                    <summary className={``}>What if I need urgent help?</summary>
                    <p>
                        If you are experiencing an acute crisis, suicidal thoughts, or a life-threatening situation, you must immediately contact emergency services or the nearest medical facility.
                    </p>
                </details> */}


            </div>
        </div>
    )
}
