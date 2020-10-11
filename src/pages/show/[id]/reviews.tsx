import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { fetchShowReviews } from '../../../lib/api';
import { Review } from '../../../lib/types';
import { Layout, ReviewCard } from '../../../components/';

const ReviewsPage: React.FC<{ showReviews: Review[] }> = ({ showReviews }) => {
  const [reviews, setReviews] = useState<Review[] | null>();

  useEffect(() => {
    console.log(showReviews);

    setReviews(showReviews);
  }, [showReviews]);

  if (!reviews) {
    return <h3>Loading</h3>;
  }

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto pb-10 flex-col h-full">
        {reviews.map((r) => (
          <ReviewCard reviewCardProps={r} key={r.id} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const showReviews = await fetchShowReviews(Number(id));
  return {
    props: {
      showReviews,
    },
  };
};

export default ReviewsPage;
