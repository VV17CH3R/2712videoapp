import { getServerSession } from "next-auth";
import prisma from "../../utils/db";
import { authOptions } from "@/app/utils/auth";
import Image from "next/image";
import { MovieCard } from "@/app/components/MovieCart";

async function getData( category: string , userId: any ) {

    switch(category) {
        case "tranings": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "show"
                },
                select: {
                    title: true,
                    overview: true,
                    videoSource: true,
                    imageString: true,
                    release: true,
                    duration: true,
                    id: true,
                    age: true,
                    youtubeString: true,
                    WatchLists: true,
                    // WatchLists: {
                    //     where: {
                    //         userId: userId,
                    //     }
                    // }
                }
            });
            return data;
        };
        case "movies": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "movie"
                },
                select: {
                    title: true,
                    overview: true,
                    videoSource: true,
                    imageString: true,
                    release: true,
                    duration: true,
                    id: true,
                    age: true,
                    youtubeString: true,
                    WatchLists: true,
                }
            });
            return data;
        };
        case "news": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "recent"
                },
                select: {
                    title: true,
                    overview: true,
                    videoSource: true,
                    imageString: true,
                    release: true,
                    duration: true,
                    id: true,
                    age: true,
                    youtubeString: true,
                    WatchLists: true,
                }
            });
            return data;
        };
        default: {
            throw new Error();
        }
    }
}

export default async function CategoryPage( {params}: { params: { genre: string } } ) {


    const session = await getServerSession(authOptions);

    const data = await getData( params.genre, session?.user?.email );
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-0 mt-10 gap-6 px-5">
            {
                data.map((movieEl) => (
                    <div key={movieEl.id} className="relative h-96" >
                        <Image src={movieEl.imageString} alt="MovieEl" width={500}  height={400}  className="rounded-sm absolute w-full h-full object-cover" />
                        <div className="h-96 relative z-10 w-full transform transition duration-500 opacity-0 hover:opacity-100 hover:scale-125" >
                            <div className="flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full">
                                <Image src={movieEl.imageString} alt="MovieElZoomed" width={800}  height={800}  className="rounded-lg -z-10 absolute w-full h-full object-cover" />
                                <MovieCard 
                                    title={movieEl.title}
                                    overview={movieEl.overview}
                                    movieId={movieEl.id}
                                    watchListId={movieEl.WatchLists[0]?.id}
                                    whatchList={movieEl.WatchLists.length > 0 ? true : false}
                                    youtubeURL={movieEl.youtubeString}
                                    key={movieEl.id}
                                    year={movieEl.release}
                                    time={movieEl.duration}
                                    age={movieEl.age}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}