import React from "react";

export default async function Delay({ time = 1000, children }: { time?: number, children: React.ReactNode }) {
    await new Promise(resolve => setTimeout(resolve, time))

    return <>{children}</>
}