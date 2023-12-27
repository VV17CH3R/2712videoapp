import Image from "next/image";
import prisma from "../utils/db";

async function getData() {
    const data = await prisma.movie.findMany({
        select: {
            id: true,
            overview: true,
            title: true,
            WatchLists: true,
            imageString: true,
            videoSource: true
        },
        orderBy: {
            createdAt: "desc",
        },
        take : 4
    });

    return data;
}

export default async function UserFavorite() {

    const data = await getData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-9 gap-6">
            {
                data.map((movEl) => (
                    <div key={movEl.id} className="relative h-48">
                        <Image src={movEl.imageString} width={500} height={130} alt={`movie:${movEl.title}`} className="rounded-sm absolute w-full h-full object-cover"/>
                    </div>
                ))
            }
        </div>
    )
}