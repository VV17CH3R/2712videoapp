'use client';

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { addToFavorite, removeFromFavorite } from "../action";
import VideoPlayerModal from "./VideoPlayerModal";

interface movieCardProps {
  title: string;
  overview: string;
  movieId: number;
  whatchList: boolean;
  watchListId: string;
  youtubeURL: string;
  year: number;
  age: number;
  time: number;
}

export function MovieCard({
  title,
  overview,
  movieId,
  watchListId,
  whatchList,
  youtubeURL,
  year,
  age,
  time,
}: movieCardProps) {

    const [playerState, setPlayerState] = useState(false);
    const pathname = usePathname();

  return (
    <>
        <button onClick={() => setPlayerState(true)}>
            <PlayCircle className="w-20 h-20" />
        </button>
        <div className=" right-5 top-5 absolute z-10">
            {whatchList ? (
                <form action={removeFromFavorite}>
                    <input type="hidden" name="watchListId" value={watchListId} />
                    <input type="hidden" name="pathname" value={pathname} />
                    <Button variant="outline" size="icon" >
                        <Heart className="w-4 h-4 text-red-500"/>
                    </Button>
                </form>
            ) : (
                <form action={addToFavorite}>
                    <input type="hidden" name="movieId" value={movieId} />
                    <input type="hidden" name="pathname" value={pathname} />
                    <Button variant="outline" size="icon" >
                        <Heart className="w-4 h-4 "/>
                    </Button>
                </form>
            )};
        </div>
        <div className="p-5 absolute bottom-0 left-0">
                <h1 className="font-bold text-lg line-clamp-1" >{title}</h1>
                <div className="flex gap-x-2 text-white/60 items-center">
                    <p className="text-white"  >{year}</p>
                    <p className="border-gray-200 border text-sm p-0.5 rounded " >{age}+</p>
                    <p className="text-sm" >{time}ч.</p>
                </div>
                <p className="line-clamp-2 text-sm text-gray-200 font-light" >{overview}</p>
        </div>
        <VideoPlayerModal isMain={true} year={year} time={time} age={age} title={title} overview={overview} youtubeUrl={youtubeURL} key={movieId} state={playerState} changeState={setPlayerState} />
    </>
  )
}
