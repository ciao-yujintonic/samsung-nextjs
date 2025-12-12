'use client'

import ModalComponent, { ModalHandle } from "@/components/Modal";
import { Todo } from "@/serverActions/todo";
import { useRef } from "react";

export default function Modal({ todo }: { todo: Todo }) {
    const ref = useRef<ModalHandle>(null)
    return (
        <ModalComponent ref={ref}>
            <h2 onClick={() => ref.current?.close()}>{todo.title}</h2>
        </ModalComponent>
    )
}