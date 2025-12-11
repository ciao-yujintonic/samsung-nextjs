import { cacheLife, cacheTag } from "next/cache"

export default async function Cache() {
    'use cache'
    cacheLife({
        //seconds
        stale: 1,
        revalidate: 1,
    })
    cacheTag('Cache Component Test')
    const date = new Date().toISOString()
    return <>{date}</>
}