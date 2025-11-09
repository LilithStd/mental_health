
import AdditionalPanel from "./additionalPanel";
import ListLinks from "./links";


export default function Header() {

    return (
        <div className={`flex flex-col`}>
            <div>
                <ListLinks />
            </div>
            <div className={`flex justify-end`}>
                <AdditionalPanel />
            </div>
        </div>
    )
}
