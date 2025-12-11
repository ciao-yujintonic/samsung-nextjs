import { Suspense } from "react"
import A from "./A"
import B from "./B"
import Loader from "@/components/Loader"

export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return (
        <>
            <h1>async page</h1>
            {/* suspense 없으면 4초 걸림 Page 1초 + B 3초 */}
            <Suspense fallback={<Loader color="red" className="relative" />}><A /></Suspense>
            <Suspense fallback={<Loader color="green" className="relative" />}><B /></Suspense>
        </>
    )
}