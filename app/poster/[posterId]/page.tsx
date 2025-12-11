import axios from "axios";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ posterId: string }> }) {
    const { posterId } = await params
    const { movie } = await axios.get(`https://omdbapi.com?apikey=7035c60c&i=${posterId}&h=1500`)
    return (
        <>
            <Image src={movie.Poster.replace('SX300', 'SX1000')} alt={movie.Title} width={1000} height={1500} />
        </>
    )
}