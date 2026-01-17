

export default function ConsultationForm() {
    return (
        <div>
            <h2>Consultation Form</h2>
            <form className={`flex gap-4 border-2 p-4 rounded-md`}>
                <div className={`flex flex-col gap-2 w-1/2`}>
                    <input placeholder="name" type="text" className={`border-2 w-full p-2`} />
                    <input placeholder="email" type="text" className={`border-2 w-full p-2`} />
                    <input placeholder="phone" type="text" className={`border-2 w-full p-2`} />
                    <input placeholder="date" type="text" className={`border-2 w-full p-2`} />
                </div>
                <div className={`flex flex-col gap-2 w-1/2`}>
                    <textarea placeholder="message" className={`border-2 w-full p-2`} />
                    <button className={`border-2 rounded-md p-2`}>Submit</button>
                </div>

            </form>
        </div>
    )
}
