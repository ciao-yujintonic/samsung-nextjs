import Cache from "@/components/Cache";
import Delay from "@/components/Delay";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import UpdateTagButton from "./UpdateTagButton";

export default function Page() {
    return (
        <>
            <h1>Cache Page</h1>
            <UpdateTagButton />
            <Suspense fallback={<Loader />}>
                <Delay time={0}><Cache /></Delay>
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Delay time={1000}><Cache /></Delay>
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Delay time={3000}><Cache /></Delay>
            </Suspense>
        </>
    )
}