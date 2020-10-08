import { useRouter } from 'next/router';
import { fetchShowDetail } from '../../lib/api';
import { ShowDetails } from '../../lib/types';
import { useEffect, useState } from 'react';
import { ShowDetailView } from '../../components/showDetailView/showDetailView';
import Layout from '../../components/layout/layout';
import { GetServerSideProps } from 'next';

interface ShowDetailsProps {
  showDetails: ShowDetails;
}

export default function ShowDetailPage(showDetailsProps: ShowDetailsProps): JSX.Element {
  const router = useRouter();
  const [showData, setShowData] = useState<ShowDetails | null>();

  useEffect(() => {
    setShowData(showDetailsProps.showDetails);
  }, [showDetailsProps.showDetails]);

  if (router.isFallback) {
    return <div className="container mx-auto mt-32 text-center">Loading...</div>;
  }

  if (!showData) {
    return <h3>Loading</h3>;
  }

  return (
    <Layout>
      <ShowDetailView showDetailProps={showData} />;
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const showDetails = await fetchShowDetail(Number(id));
  return {
    props: {
      showDetails,
    },
  };
};
