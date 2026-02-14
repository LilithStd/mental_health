import CurrentUser from '@/app/components/currentUser';


export default async function Users({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params
    return <div className={`flex flex-col bg-mainContainer rounded-medium flex-1 indents-main-container`}>
        <h1>User Page</h1>
        <CurrentUser id={id} />
    </div>
}
