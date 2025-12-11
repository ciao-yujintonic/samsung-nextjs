import Image from "next/image";
import Title from "./title";
import Link from "next/link";
import { fetchMovieDetails } from "@/serverActions/movie";

export interface Movie {
    Title: string
    Poster: string
    Plot: string
    imdbID: string
}

// Page에서 받는 params 그대로 매개변수로 받음
export async function generateMetadata({ params }: { params: Promise<{ movieId: string }> }) {
    const { movieId } = await params
    const movie = await fetchMovieDetails(movieId);
    return {
        title: movie.Title,
        description: movie.Plot,
        openGraph: {
            type: 'website',
            title: movie.Title,
            description: movie.Plot,
            images: movie.Poster,
            url: 'https://abc.com/', // 페이지 주소 O, 사이트 주소 X
            siteName: '사이트 이름'
        },
        twitter: {
            card: 'summary_large_image',
            title: movie.Title,
            description: movie.Plot,
            images: movie.Poster,
            site: '사이트 이름'
        }
    }
}

export default async function Page({ params }: { params: Promise<{ movieId: string }> }) {
    // params는 항상 비동기로 강제됨
    const { movieId } = await params
    const movie = await fetchMovieDetails(movieId);
    return (
        <>
            <Title movie={movie} />
            <Link href={`/poster/${movie.imdbID}`}>
                <Image src={movie.Poster} alt="" width={200} height={300} />
            </Link>
        </>
    )
}