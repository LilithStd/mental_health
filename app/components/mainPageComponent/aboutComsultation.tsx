

export default function AboutConsultation() {
    return (
        <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
            <h2 className={`text-2xl font-bold `}>What is a Consultation?</h2>
            <p className={`mt-4`}>A consultation is a professional meeting between a patient and a healthcare provider, such as a psychiatrist, psychologist, or therapist. During a consultation, the healthcare provider will assess the patients mental health, discuss their symptoms and concerns, and provide recommendations for treatment or further evaluation. Consultations can be conducted in person, over the phone, or through telehealth platforms, making it easier for individuals to access mental health care from the comfort of their own homes.</p>
            <h3 className={`text-xl font-semibold mt-4`}>Benefits of Consultation:</h3>
            <ul className={`list-disc list-inside mt-2`}>
                <li>Early identification and intervention for mental health issues</li>
                <li>Personalized treatment plans tailored to individual needs</li>
                <li>Access to a wide range of mental health resources and support</li>
                <li>Improved overall well-being and quality of life</li>
            </ul>
            <button className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large`}>Sign Up for a Consultation</button>
        </div>
    )
}
