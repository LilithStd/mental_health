

export default function ConsultationForm() {
    return (
        <div className={`flex flex-col items-center justify-center w-full mt-8 mb-8`}>
            <form className={`flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-md `}>
                <label className={`text-center mb-2`}>Contact Information</label>
                <div className={`flex gap-4 w-full`}>

                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <input placeholder="name" type="text" className={`border-2 w-full p-2`} />
                        <input placeholder="email" type="text" className={`border-2 w-full p-2`} />
                        <input placeholder="phone" type="text" className={`border-2 w-full p-2`} />
                        <input placeholder="date" type="text" className={`border-2 w-full p-2`} />
                    </div>
                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <textarea placeholder="message" className={`border-2 w-full p-2`} />
                    </div>
                </div>

                <button className={`border-2 w-1/2 rounded-md p-2`}>Submit</button>
            </form>
        </div>
    )
}
