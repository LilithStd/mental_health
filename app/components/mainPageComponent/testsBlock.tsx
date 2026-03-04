import { routes } from "@/app/helpers/helpersFunctions";
import Link from "next/link";


export default function TestsBlock({ locale }: { locale: string }) {
    const routesAdaptive = routes(locale)
    return (
        <div>
            <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-2xl font-bold `}>Tests Block</h2>
                <p className={`mt-4`}>Tests it easy path to test your mental health and well-being.</p>
                <Link href={routesAdaptive.tests.root} className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large`}>Take a Test</Link>
            </div>
        </div>
    )
}
