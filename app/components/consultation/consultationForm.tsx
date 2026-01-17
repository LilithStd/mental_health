

export default function ConsultationForm() {
    return (
        <div>
            <h2>Consultation Form</h2>
            <form>
                <input placeholder="name" type="text" className={`border-2`} />
                <input placeholder="email" type="text" className={`border-2`} />
                <input placeholder="phone" type="text" className={`border-2`} />
                <input placeholder="date" type="text" className={`border-2`} />
                <input placeholder="time" type="text" className={`border-2`} />
            </form>
        </div>
    )
}
