
export default function FaqPage() {
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <h2>Frequently Asked Questions</h2>
                <ul className={`list-disc list-inside mb-4`}>
                    <li className={``}>What is the difference between a psychiatrist and a psychologist or psychotherapist?</li>
                    <li className={``}>Will I necessarily be prescribed medication?</li>
                    <li className={``}>Is the consultation confidential?</li>
                    <li className={``}>What does the initial consultation involve?</li>
                    <li className={``}>How long does treatment last?</li>
                    <li className={``}>Is it possible to get help online?</li>
                    <li className={``}>Do I need a diagnosis to schedule an appointment?</li>
                    <li className={``}>What if I need urgent help?</li>
                </ul>
                <p>
                    1. Whats the difference between a psychiatrist and a psychologist or psychotherapist?

                    A psychiatrist is a physician with a medical degree. They can diagnose, prescribe medication, and write prescriptions.
                    A psychologist is not a physician and does not prescribe medication.
                    A psychotherapist is a specialist who practices psychotherapy; in some countries, they are considered physicians, but in others, they are not.

                    2. Will I necessarily be prescribed medication?

                    No. Medication is prescribed only when indicated.
                    In many cases, psychotherapy, observation, or a comprehensive approach may be sufficient. The decision is made jointly with the patient.

                    3. Is the consultation confidential?

                    Yes. All information is strictly confidential and will not be shared with third parties, except in cases required by law (for example, in cases of life-threatening situations).

                    4. What does the initial consultation involve?

                    The initial consultation usually lasts 50–60 minutes. We discuss symptoms, medical history, lifestyle, and, if necessary, develop a treatment or monitoring plan.

                    5. How long does treatment last?

                    The duration depends on the diagnosis and individual circumstances.
                    Some conditions require short-term support, while others require longer-term monitoring.

                    6. Is it possible to get help online?

                    Yes, consultations are available online (video).
                    Online consultations are suitable for most conditions if an in-person examination is not necessary.

                    7. Do I need a diagnosis to schedule an appointment?

                    No. If you feel distressed, anxious, or if your condition is interfering with your life, that is sufficient reason to contact us. A diagnosis is made during the consultation.

                    8. What if I need urgent help?

                    If you are experiencing an acute crisis, suicidal thoughts, or a life-threatening situation, you must immediately contact emergency services or the nearest medical facility.
                </p>
            </div>
        </div>
    )
}
