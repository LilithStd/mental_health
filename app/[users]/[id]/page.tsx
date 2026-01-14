import React from 'react'
interface UsersProps {
    params: Promise<{
        id: string
    }>
}
export default async function User({ params }: UsersProps) {
    const { id } = await params

    return <div>User id: {id}</div>
}
