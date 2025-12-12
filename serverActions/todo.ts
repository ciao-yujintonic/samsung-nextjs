'use server'
import axios from "axios";

export interface Todo {
    id: string
    title: string
}
export const api = axios.create(
    {
        baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        headers: {
            'content-type': 'application/json',
            apikey: process.env.TODO_APIKEY,
            username: process.env.TODO_USERNAME,
        }
    }
)
export async function fetchTodos() {
    'use cache'
    const { data } = await api.get<Todo[]>('/')
    return data
}