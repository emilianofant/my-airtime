import { Show } from '../../lib/types';

export default function ShowCard(cardProps: Show): JSX.Element {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
      <a href="#">
        <img
          src={`http://image.tmdb.org/t/p/w220_and_h330_face/${cardProps.backdrop_path}`}
          className="w-full h-auto rounded-lg"
        />
      </a>

      <h2 className="text-xl py-4">
        <a href="#" className="text-black no-underline">
          {cardProps.original_name}
        </a>
      </h2>

      <p className="text-xs leading-normal"> {cardProps.overview} </p>
    </div>
  );
}
