
interface PopUpWindowProps {
    children?: React.ReactNode;
    callBackClosePopUpWindow: () => void;
}

export default function PopUpWindow({ children, callBackClosePopUpWindow }: PopUpWindowProps) {
    return (
        <div>
            {children}
        </div>
    )
}
