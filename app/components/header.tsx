import AdditionalPanel from "./additionalPanel";
import Authorization from "./authorization";
import ListLinks from "./links";


export default function Header() {

    return (
        <nav className={`flex rounded-medium  justify-center items-center indents-main-container   `}>
            <div className={`flex max-w-6xl justify-between items-center w-full  bg-subContainer rounded-large`}>
                <div className={`flex`}>
                    <h1 className={`text-6xl text-center`}>Mental Health</h1>

                </div>
                <div className={`flex justify-center `}>
                    <ListLinks />
                </div>
                <div className={`flex justify-end `}>
                    <AdditionalPanel />
                </div>
                <div className={`flex justify-end `}>
                    <Authorization />
                </div>
            </div>

        </nav>
    )
}
