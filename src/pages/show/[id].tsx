import { useRouter } from 'next/router';
import { fetchShowDetail } from '../../lib/api';
import { ShowDetails } from '../../lib/types';
import { useEffect, useState } from 'react';

interface ShowDetailsProps {
  showDetails: ShowDetails;
}

export default function ShowDetailPage(showDetailsProps: ShowDetailsProps): JSX.Element {
  const router = useRouter();
  const [showData, setShowData] = useState<ShowDetails | null>();

  useEffect(() => {
    setShowData(showDetailsProps.showDetails);
    console.log(showData);
  }, []);

  if (router.isFallback) {
    return <div className="container mx-auto mt-32 text-center">Loading...</div>;
  }

  if (!showData) {
    return <h3>Loading</h3>;
  }

  return <div>Test {showData.id} </div>;
}

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const showDetails = await fetchShowDetail(Array.isArray(id) ? id[0] : id);
  return {
    props: {
      showDetails,
    },
  };
};
