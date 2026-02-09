

interface ModalWindowProps {
    openStatusCallBack: boolean
    closeStatusCallBack: () => void
    children?: React.ReactNode
}

export default function ModalWindowMain(props: ModalWindowProps) {
    //stores

    // 
    if (!props.openStatusCallBack) {
        return null
    }
    return (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative">
                <button
                    onClick={props.closeStatusCallBack}
                    className={` absolute -top-3 -right-3
                            w-8 h-
                            flex items-center justify-center
                            rounded-full
                            text-xl font-bold
                            cursor-pointer
                            bg-activeElement
                            hover:bg-hover
                            
                            transition-colors duration-300
                            `}


                    aria-label="Close modal"
                >
                    ×
                </button>
                {props.children}
            </div>
        </div>



    )
}
