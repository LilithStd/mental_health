

export default function Footer({ locale }: { locale: string }) {
    return (
        <div className={`flex rounded-medium  justify-center  indents-main-container `}>
            <div className={`flex flex-col max-w-6xl justify-between items-center w-full bg-subContainer rounded-large min-h-20 p-6`}>
                <h2 className={`text-2xl font-bold `}>Footer</h2>
                <h3 className={`text-lg font-medium `}>2026</h3>
            </div>

        </div>
    )
}
