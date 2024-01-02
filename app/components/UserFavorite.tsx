import Image from "next/image";
import prisma from "../utils/db";
import { MovieCard } from "./MovieCart";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

async function getData( userId : string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: {
        where: {
          userId: userId
        }
      },
      imageString: true,
      youtubeString: true,
      release: true,
      age: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

export default async function UserFavorite() {

  const session = await getServerSession(authOptions);

  const data = await getData(session?.user?.email as string);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-9 gap-6">
      {data.map((movEl) => (
        <div key={movEl.id} className="relative h-full">
          <Image
            src={movEl.imageString}
            width={500}
            height={330}
            alt={`movie:${movEl.title}`}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="relative h-96 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center border justify-center">
              <Image
                src={movEl.imageString}
                width={800}
                height={800}
                alt={`movie:${movEl.title}`}
                className="rounded-lg absolute w-full h-full object-cover -z-10"
              />
              <MovieCard
                title={movEl.title}
                overview={movEl.overview}
                movieId={movEl.id}
                watchListId={movEl.WatchLists[0]?.id}
                whatchList={movEl.WatchLists.length > 0 ? true : false}
                youtubeURL={movEl.youtubeString}
                key={movEl.id}
                year={movEl.release}
                time={movEl.duration}
                age={movEl.age}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
