import AdditionalPanel from "./headerComponent/additionalPanel";
import AuthorizationMain from "../authorization/authorizationMain";
import ListLinks from "../links";
import Logo from "./headerComponent/logo";
import HeaderBackground from "./headerComponent/headerBackground";


export default function Header() {

    return (
        <nav className={`flex rounded-medium  justify-center  indents-main-container `}>
            <HeaderBackground>
                <div className={`flex bg-mainContainer rounded-large indents-container-sub items-center justify-center p-4`}>
                    <Logo />
                </div>
                <div className={`flex flex-col items-center justify-center `}>
                    <ListLinks />
                </div>
                <div className={` flex bg-mainContainer rounded-large relative indents-container-sub items-center justify-center p-4`}>
                    <AdditionalPanel />
                    <AuthorizationMain />
                </div>
            </HeaderBackground>

        </nav>
    )
}
