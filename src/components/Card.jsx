import Image from "next/image";
import Link from "next/link";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition duration-200 ease-in transform sm:hover:scale-110 hover:z-50">
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-100 h-80 overflow-hidden grid grid-cols-7 gap-4">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate text-white transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-amber-600">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <p className="flex items-center ml-4">{result.vote_average}⭐</p>
          </p>
        </div>
      </Link>
    </div>
  );
}
