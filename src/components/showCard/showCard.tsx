import Link from 'next/link';
import { Show } from '../../lib/types';

export default function ShowCard(cardProps: Show): JSX.Element {
  const { id } = cardProps;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 shadow">
      <Link href={`/show/${id}`}>
        <a>
          <img
            src={`http://image.tmdb.org/t/p/w220_and_h330_face/${cardProps.backdrop_path}`}
            className="w-full h-auto rounded-lg"
          />
        </a>
      </Link>

      <h2 className="text-xl py-4">
        <Link href={`/show/${id}`}>
          <a className="text-black no-underline">{cardProps.original_name}</a>
        </Link>
      </h2>

      <p className="text-xs leading-normal"> {cardProps.overview} </p>
    </div>
  );
}
