import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { fetchShowReviews } from '../../../lib/api';
import { Review } from '../../../lib/types';

interface ShowReviewsProps {
  showReviews: Review[];
}

export default function ReviewsPage(showReviewsProps: ShowReviewsProps): JSX.Element {
  const [reviews, setReviews] = useState<Review[] | null>();

  useEffect(() => {
    setReviews(showReviewsProps.showReviews);
    console.log(reviews);
  }, [showReviewsProps.showReviews, reviews]);

  if (!reviews) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      {reviews.map((r) => (
        <div>{r.author}</div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const showReviews = await fetchShowReviews(Number(id));
  return {
    props: {
      showReviews,
    },
  };
};
