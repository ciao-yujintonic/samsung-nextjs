'use client'

import { Movie } from "./page"

export default function Title({ movie }: { movie: Movie }) {
    return (
        <>
            <h1 onClick={() => console.log(movie.Title)}>{movie.Title}</h1>
        </>
    )
}