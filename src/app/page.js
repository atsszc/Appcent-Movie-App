import Carousel from '@/components/Carousel';
import Results from '@/components/Results';


const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchPopular';
  let endpoint = '';

  switch (genre) {
    case 'fetchPopular':
      endpoint = '/movie/popular';
      break;
    case 'fetchTopRated':
      endpoint = '/movie/top_rated';
      break;
    default:
      endpoint = '/trending/all/week';
      break;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;

  return (
    <div>
      <Carousel />
      <Results results={results} genre={genre}/>
    </div>
  );
}
