import AdditionalPanel from "./additionalPanel";
import Authorization from "./authorization";
import ListLinks from "./links";


export default function Header() {

    return (
        <nav className={`flex rounded-medium  justify-center items-center indents-main-container   bg-mainContainer`}>
            <div className={`flex  justify-between items-center max-content-main-container bg-subContainer rounded-large`}>
                <div className={`flex`}>
                    <h1 className={`text-5xl text-center`}>Mental Health</h1>

                </div>
                <div className={`flex justify-center lg:w-1/2  xl:w-1/2 md:w-2/5 sm:w-3/5 w-2/5`}>
                    <ListLinks />
                </div>
                <div className={`flex justify-end w-1/4 md:w-1/5 lg:w-1/7`}>
                    <AdditionalPanel />
                </div>
                <div className={`flex justify-end w-1/4 md:w-1/5 lg:w-1/7`}>
                    <Authorization />
                </div>
            </div>

        </nav>
    )
}
