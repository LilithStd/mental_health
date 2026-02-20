import CurrentUser from '@/app/components/currentUser';


export default async function Users({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params
    return <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
        <div className={`flex flex-col p-4 w-full flex-1  max-w-6xl  rounded-medium bg-mainContainer `}>
            <h1>User Page</h1>
            <CurrentUser id={id} />
        </div>

    </div>
}
