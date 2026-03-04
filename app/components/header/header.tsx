import AdditionalPanel from "./headerComponent/additionalPanel";
import AuthorizationMain from "../authorization/authorizationMain";
import ListLinks from "../links";
import Logo from "./headerComponent/logo";
import HeaderBackground from "./headerComponent/headerBackground";


export default function Header({ locale }: { locale: string }) {

    return (
        <nav className={`flex rounded-medium  justify-center  indents-main-container `}>
            <HeaderBackground>
                {/* <div className={`flex bg-mainContainer rounded-large indents-container-sub items-center justify-center p-4`}>
                    <Logo />
                </div>
                <div className={`flex flex-col items-center justify-center `}>
                    <ListLinks />
                </div>
                <div className={` flex bg-mainContainer rounded-large relative indents-container-sub items-center justify-center p-4`}>
                    <AdditionalPanel />
                    <AuthorizationMain />
                </div> */}
                <div className="grid grid-cols-[1fr_3fr_1fr] gap-10 items-center w-full">

                    {/* Левый блок */}
                    <div className="flex justify-start">
                        <div className="bg-mainContainer rounded-large indents-container-sub p-4">
                            <Logo />

                        </div>
                    </div>

                    {/* Центр */}
                    <div className="flex justify-center">
                        <ListLinks />
                    </div>

                    {/* Правый блок */}
                    <div className="flex justify-end bg-mainContainer rounded-large indents-container-sub p-4">
                        <AdditionalPanel />
                        <AuthorizationMain />
                    </div>

                </div>
            </HeaderBackground>

        </nav>
    )
}
