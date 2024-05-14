import Image from "next/image";
import Genres from "@/components/Genres";


export default async function MoviePage({ params}) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center ml-10 mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          width={900}
          height={800}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="uppercase -translate-y-3 text-[26px] md:text-[34px] font-medium pr-4 text-white">
            {movie?.title || movie?.name}
          </h2>
          <div className="flex gap-4 flex-wrap mt-2">
            {movie?.genres?.map((genre, index) => (
              <Genres
                key={genre?.id}
                index={index}
                length={movie?.genres?.length}
                name={genre?.name}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-6 text-xl">
            <div>Language: {movie?.original_language?.toUpperCase()}</div>
            <div>Release: {movie?.release_date}</div>
            <div>Runtime: {movie?.runtime} MIN.</div>
            <div>Rating: {movie?.vote_average} ⭐</div>
          </div>

          <div className="pt-14 space-y-2 pr-4 text-xl">
            <div className="uppercase -translate-y-3 text-[26px] md:text-[30px] font-medium pr-4 text-white">OVERVIEW:</div>
            <div className="lg:line-clamp-4">{movie?.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
