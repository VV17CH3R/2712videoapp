import MovieVideo from "../components/MovieVideo";
import UserFavorite from "../components/UserFavorite";

export default function HomePage() {
    return (
        <div className="px-5 lg:px-0">
            <MovieVideo />
            <h1 className="text-center lg:text-left lg:text-4xl text-2xl">Недавно добавленные</h1>
            <UserFavorite />
        </div>
    )
};