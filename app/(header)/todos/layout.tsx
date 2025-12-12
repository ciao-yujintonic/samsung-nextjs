import { fetchTodos } from "@/serverActions/todo";
import Link from "next/link";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
    const todos = await fetchTodos()
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
            {children}
        </>
    )
}