import CurrentUser from "@/app/components/currentUser"

interface UsersProps {
    params: Promise<{
        id: string
    }>
}
export default async function User({ params }: UsersProps) {
    const { id } = await params

    return <div>
        <h1>User Page</h1>
        <CurrentUser id={id} />
    </div>
}
