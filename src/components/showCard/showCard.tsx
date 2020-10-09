import Link from 'next/link';
import { Show } from '../../lib/types';

export default function ShowCard(cardProps: Show): JSX.Element {
  const { id } = cardProps;

  return (
    <Link href={`/show/${id}`}>
      <div className="w-full hover:cursor-pointer hover:bg-blue-200 sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 bg-white shadow">
        <img
          src={`http://image.tmdb.org/t/p/w220_and_h330_face/${cardProps.backdrop_path}`}
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-xl py-4">{cardProps.original_name}</h2>
        <p className="text-xs leading-normal"> {cardProps.overview} </p>
      </div>
    </Link>
  );
}
