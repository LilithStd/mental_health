import WithOutAuthorizationIcon from "@/public/icons/user/User.svg";

interface NoneAuthUserComponentProps {
    callBackModal: () => void
}

export default function NoneAuthUserComponent({ callBackModal }: NoneAuthUserComponentProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2`}>
            <WithOutAuthorizationIcon width={48} height={48} onClick={callBackModal} />
            <div className={`min-h-12 cursor-pointer`}>

            </div>

        </div>
    )
}
