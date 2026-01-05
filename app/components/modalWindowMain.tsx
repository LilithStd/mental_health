'use client'
interface ModalWindowProps {
    openStatusCallBack: boolean
    closeStatusCallBack: () => void
    children?: React.ReactNode
}

export default function ModalWindowMain(props: ModalWindowProps) {
    if (!props.openStatusCallBack) {
        return null
    }
    return (

        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50}`}>
            <h2 className="text-white" >modalWindow</h2>
            <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={props.closeStatusCallBack}>×</button>
            {props.children}
        </div >


    )
}
