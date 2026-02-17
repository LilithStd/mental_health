import AdditionalPanel from "./additionalPanel";
import AuthorizationMain from "./authorization/authorizationMain";
import ListLinks from "./links";


export default function Header() {

    return (
        <nav className={`flex rounded-medium  justify-center  indents-main-container `}>
            <div className={`flex max-w-6xl justify-between items-center w-full  bg-subContainer rounded-large`}>
                <div className={`flex bg-mainContainer rounded-large indents-container-sub items-center justify-center p-4`}>
                    <h2 className="text-3xl text-center max-w-[200px] m-2 w-30">Mental Health</h2>

                </div>
                <div className={`flex flex-col items-center justify-center `}>
                    <ListLinks />
                </div>
                <div className={`flex bg-mainContainer rounded-large indents-container-sub items-center justify-center p-4`}>
                    <AdditionalPanel />
                    <AuthorizationMain />
                </div>
                {/* <div className={`flex flex-col bg-mainContainer rounded-large relative indents-container-sub gap-2 p-4`}>

                </div> */}
            </div>

        </nav>
    )
}
