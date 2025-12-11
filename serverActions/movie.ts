'use cache'

import { Movie } from "@/app/(header)/movies/[movieId]/page"
import axios from "axios"

export async function fetchMovieDetails(movieId: string) {
    const { data: movie } = await axios.get<Movie>(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
    return movie
}