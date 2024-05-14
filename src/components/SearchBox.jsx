'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between px-6 max-w-6xl mx-auto pt-5'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search movies...'
        className='w-full h-14 rounded-md placeholder-amber-600 outline-none bg-transparent flex-1 text-xl '
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className='mr-2 mt-4 size-5'/>
      <button
        className='text-amber-600 disabled:text-amber text-xl'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}
