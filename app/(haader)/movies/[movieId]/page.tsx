import Image from "next/image";
import Title from "./title";
import axios from "axios";
import Link from "next/link";

export interface Movie {
    Title: string
    Poster: string
    imdbID: string
}

export default async function Page({ params }: { params: Promise<{ movieId: string }> }) {
    // params는 항상 비동기로 강제됨
    const { movieId } = await params
    const response = await axios.get<Movie>(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
    const movie = response.data
    return (
        <>
            <Title movie={movie} />
            <Link href={`/poster/${movie.imdbID}`}>
                <Image src={movie.Poster} alt="" width={200} height={300} />
            </Link>
        </>
    )
}