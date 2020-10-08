import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { fetchShowReviews } from '../../../lib/api';
import { Review } from '../../../lib/types';
import Layout from '../../../components/layout/layout';
import { ReviewCard } from '../../../components/ReviewCard/ReviewCard';

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
    <Layout>
      <div className="container max-w-4xl mx-auto pb-10 flex-col">
        {reviews.map((r) => (
          <ReviewCard reviewCardProps={r} key={r.id} />
        ))}
      </div>
    </Layout>
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
