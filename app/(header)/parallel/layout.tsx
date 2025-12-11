import { ReactNode } from "react";

//children = page
export default function Layout({ children, a, b }: { children: ReactNode, a: ReactNode, b: ReactNode }) {
    return <>
        {children}
        {a}
        {b}
    </>
}