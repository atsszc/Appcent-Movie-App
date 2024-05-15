"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const Carousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=356ea6e237a0ac0682901ce129eeecf1&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{ clickable: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-3xl w-full h-full"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {popularMovies.map((movie, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Link href={`/movie/${movie.id}`}>
              <div className="relative h-screen">
                <div className="object-cover w-full h-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg mt-4"
                  />
                  <div className="absolute bottom-2 left-0 p-8 bg-gradient-to-t from-transparent to-black ">
                    <h2 className="font-bold text-6xl text-white mb-4">
                      {movie.title || movie.name}
                    </h2>
                    <div className="overview-container">
                      <p className="flex items-center text-white mt-2 text-2xl mb-4">
                        {movie.overview}
                      </p>
                    </div>
                    <p className="mb-4 text-white text-2xl">
                      <span className="font-semibold mr-1">Date Released:</span>
                      {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-4 text-white text-2xl">
                      <span className="font-semibold mr-1">Rating:</span>
                      {movie.vote_average}⭐
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
