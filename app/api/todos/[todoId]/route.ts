// http://localhost:3000/api/todos
// HTTP 메소드 이름으로 함수 생성

import axios from "axios";
import { NextRequest } from "next/server";
import { api } from "../todoApi";

interface Context {
    params: Promise<{ todoId: string }>
}

interface PutRequestBody {
    title: string
    done: boolean
}

export async function PUT(request: NextRequest, { params }: Context) {
    const { todoId } = await params
    const a = request.nextUrl.searchParams.get('a')
    const body = (await request.json()) || {} as PutRequestBody
    const { data: todo } = api.put(`/${todoId}`, body)
    return Response.json(todo)
}