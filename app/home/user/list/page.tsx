import { MovieCard } from "@/app/components/MovieCart";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import prisma from "../../../utils/db";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
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
        },
      },
    },
  });
  return data;
}

export default async function UserWhatchList() {
    
  const session = await getServerSession(authOptions);

  const data = await getData(session?.user?.email as string);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Избранное
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-0 mt-10 gap-6 px-5">
        {data.map((movieEl) => (
          <div key={movieEl.Movie?.id} className="relative h-96">
            <Image
              src={movieEl.Movie?.imageString as string}
              alt="MovieEl"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="h-96 relative z-10 w-full transform transition duration-500 opacity-0 hover:opacity-100 hover:scale-125">
              <div className="flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full">
                <Image
                  src={movieEl.Movie?.imageString as string}
                  alt="MovieElZoomed"
                  width={800}
                  height={800}
                  className="rounded-lg -z-10 absolute w-full h-full object-cover"
                />
                <MovieCard
                  title={movieEl.Movie?.title as string}
                  overview={movieEl.Movie?.overview as string}
                  movieId={movieEl.Movie?.id as number}
                  watchListId={movieEl.Movie?.WatchLists[0]?.id as string}
                  whatchList={
                    (movieEl.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                  youtubeURL={movieEl.Movie?.youtubeString as string}
                  key={movieEl.Movie?.id}
                  year={movieEl.Movie?.release as number}
                  time={movieEl.Movie?.duration as number}
                  age={movieEl.Movie?.age as number}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
