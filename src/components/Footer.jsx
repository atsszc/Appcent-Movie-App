import React from 'react'
import Link from 'next/link'
import { BiMoviePlay } from "react-icons/bi";
import { IoCodeSlash, IoCodeSharp } from "react-icons/io5";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-amber-600 min-h-[400px] md:h-[250px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col  items-center gap-y-5 py-16 md:py-8'>
          <div className='flex gap-1 items-center text-2xl md:text-2xl font-bold'>
            <span className='italic'>Appcent</span>
            <BiMoviePlay />
            <span className='italic'>Movie App</span>
          </div>
          <div className='flex flex-col gap-8 tracking-wider text-black'>
            <Link href="/?genre=fetchPopular">
              <span className='footer-link hover:text-white cursor-pointer'>Popular Movies</span>
            </Link>
            <Link href="/?genre=fetchTrending">
              <span className='footer-link hover:text-white cursor-pointer'>Trending Movies</span>
            </Link>
            <Link href="/?genre=fetchTopRated">
              <span className='footer-link hover:text-white cursor-pointer'>Top Rated Movies</span>
            </Link>       
          </div>
          <div className='flex gap-x-5 mt-4 items-center'>
            <Link href="https://github.com/atsszc">
              <span target="_blank">
                <FaGithub size={30} className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'/>
              </span>
            </Link>
            <Link href="https://www.instagram.com/atsszc/">
              <span target="_blank">
                <FaInstagram size={30} className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'/>
              </span>
            </Link>
            <Link href="mailto:ahmedturansozcu@gmail.com">
              <span target="_blank">
                <MdEmail size={30} className='text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300'/>
              </span>
            </Link>
          </div>
        </div>
        <div className='flex flex-col mx-auto items-center'>
          <IoCodeSlash size={30} className='absolute -mr-96 mt-4 text-gray-700'/>
          <p className='text-white text-center text-lg mt-4 italic'>Designed by Ahmed Turan Sözcü</p>
          <IoCodeSharp size={30} className='absolute -ml-96 mt-4 text-gray-700'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
