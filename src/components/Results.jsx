import Card from './Card';

export default function Results({ results, genre }) {

  let title = '';
  switch (genre) {
    case 'fetchTopRated':
      title = 'TOP RATED MOVIES';
      break;
    case 'fetchTrending':
      title = 'TRENDING MOVIES';
      break;
    case 'fetchPopular':
    default:
      title = 'POPULAR MOVIES';
      break;
  }

  return (
    <div>
      <div className="flex justify-start items-start ml-24">
        <span className="text-center justify-center mb-5 font-bold text-3xl mt-8">{title}</span>
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 max-w-8xl  ml-20 mr-20 py-4">
        {results.map((result) => (   
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
