import CurrentUser from '@/app/components/currentUser';


export default async function Users({
    params,
}: {
    params: { id: string }
}) {

    return  (
        <div className={`flex flex-col indents-main-container flex-1 items-center`}>
        <div className={`flex flex-col p-4 w-full flex-1  max-w-6xl  rounded-large bg-primary-color/30 items-center justify-start gap-4`}>
            <h1>User Page</h1>
            <CurrentUser />
        </div>

    </div>
    )
    
}
