// http://localhost:3000/api/todos
// HTTP 메소드 이름으로 함수 생성

import { NextRequest } from "next/server";
import { api } from "./todoApi";

export async function GET() {
    const { data: todos } = await api.get('/')
    return Response.json(todos)
}

export async function POST(request: NextRequest) {
    const { title } = (await request.json()) || {};
    const { data: todo } = await api.post('/', { title })
}
