import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex bg-amber-600 p-4 text-xl justify-center gap-6 '>
      <NavbarItem title='Popular' param='fetchPopular' />
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}
