import Link from 'next/link';
import { Show } from '../../lib/types';

const ShowCard: React.FC<{ show: Show }> = ({ show }) => {
  const { id } = show;

  return (
    <Link href={`/show/${id}`}>
      <div className="w-full cursor-pointer hover:bg-blue-200 sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 bg-white shadow">
        <img
          src={`http://image.tmdb.org/t/p/w220_and_h330_face/${show.backdrop_path}`}
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-xl py-4">{show.original_name}</h2>
        <p className="text-xs leading-normal"> {show.overview} </p>
      </div>
    </Link>
  );
};

export default ShowCard;
