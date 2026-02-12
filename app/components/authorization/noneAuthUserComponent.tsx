import WithOutAuthorizationIcon from "@/public/icons/user/UserLogout.svg";

export default function NoneAuthUserComponent() {
    return (
        <div className={`flex flex-col items-center justify-center gap-2`}>
            <WithOutAuthorizationIcon width={48} height={48} />
            <div className={`min-h-12 cursor-pointer`}>

            </div>

        </div>
    )
}
