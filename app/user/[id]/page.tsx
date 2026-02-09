'use client'
import { use } from 'react'
import CurrentUser from '@/app/components/currentUser';


export default function Users({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    return <div className={`flex flex-col bg-mainContainer rounded-medium flex-1 indents-main-container`}>
        <h1>User Page</h1>
        <CurrentUser id={id} />
    </div>
}
