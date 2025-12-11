'use client'
import { fetchTodos, Todo } from "@/serverActions/todo";
import { useEffect, useState } from "react";

export default function Page() {
    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(() => {
        fetchTodos().then(todos => setTodos(todos))
    }, [])

    return (
        <>
            <h1>Client Page</h1>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>{todo.title}</li>
                })}
            </ul>
        </>
    )
}