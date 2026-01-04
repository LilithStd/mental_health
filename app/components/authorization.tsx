
import WithOutAutorizationIcon from "@/public/icons/user/UserCircle.svg";

export default function Authorization() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4">
            <WithOutAutorizationIcon width={48} height={48} />
            <h2>Sign</h2>

        </div>
    )
}
