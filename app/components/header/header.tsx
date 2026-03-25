import AdditionalPanel from "./headerComponent/additionalPanel";
import AuthorizationMain from "../authorization/authorizationMain";
import ListLinks from "../links";
import Logo from "./headerComponent/logo";
import HeaderBackground from "./headerComponent/headerBackground";


export default function Header() {
    return (
        <nav className={`flex justify-center sticky pt-8 pl-8 pr-8 top-0 left-0 w-full z-50`}>
            <HeaderBackground>
                <div className="grid grid-cols-[1fr_3fr_1fr] gap-10 items-center w-full">
                    <div className="flex justify-start">
                        <div className=" rounded-large p-4">
                            <Logo />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <ListLinks />
                    </div>
                    <div className="flex justify-end rounded-large p-4">
                        <AdditionalPanel />
                        <AuthorizationMain />
                    </div>

                </div>
            </HeaderBackground>

        </nav>
    )
}
