import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Season, ShowDetails } from '../../lib/types';
import SeasonsAccordion from '../SeasonsAccordion/SeasonsAccordion';
import styles from './showDetails.module.css';
import RaitingStars from '../RatingStars/RatingStars';

// export default function ShowDetailView(showDetailProps: ShowDetails): JSX.Element {
export const ShowDetailView: React.FC<{ showDetail: ShowDetails; onRateShow }> = (props) => {
  const [showDetails, setShowDetails] = useState<ShowDetails>(null);
  const total = 10;

  useEffect(() => {
    setShowDetails(props.showDetail);
  }, [props.showDetail]);

  const onRatingChange = (rate: number) => {
    props.onRateShow(rate);
  };

  if (!showDetails) {
    return <h3>Loading</h3>;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-gray-light">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div>
            <img
              alt="ecommerce"
              className={`lg:w-3/4 w-full m-auto object-cover object-center rounded border border-gray-200 ${styles.showImage}`}
              src={`http://image.tmdb.org/t/p/w300_and_h450_face/${showDetails.backdrop_path}`}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <Link href={`/show/${showDetails.id}/reviews`}>
              <a>Reviews</a>
            </Link>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {showDetails.original_name}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Rated: {showDetails.vote_average}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <RaitingStars total={total} onChange={onRatingChange} />
                <span className="text-gray-600 ml-3">Rating</span>
              </span>
            </div>
            <p className="leading-relaxed">{showDetails.overview}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-4">Seasons: {showDetails.seasons.length}</span>
                <span className="mr-4">Episodes: {showDetails.number_of_episodes}</span>
              </div>
              <div className="flex ml-6 items-center"></div>
            </div>
            <div className="flex flex-col">
              {showDetails.seasons.map((s: Season) => (
                <SeasonsAccordion season={s} showId={showDetails.id} key={s.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
