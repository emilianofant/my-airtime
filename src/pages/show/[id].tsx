import { useRouter } from 'next/router';
import { fetchShowDetail, postRateShow } from '../../lib/api';
import { IShowDetails } from '../../lib/types';
import { useContext, useEffect, useState } from 'react';
import { ShowDetails, Layout } from '../../components/';
import { GetServerSideProps } from 'next';
import SessionContext from '../../store/SessionContext';

interface ShowDetailsProps {
  showDetails: IShowDetails;
  onRateShow: () => void;
}

export default function ShowDetailPage(showDetailsProps: ShowDetailsProps): JSX.Element {
  const router = useRouter();
  const [showData, setShowData] = useState<IShowDetails | null>();
  const sessionContext = useContext(SessionContext);

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
      <ShowDetails
        showDetail={showData}
        onRateShow={(rate: string) =>
          postRateShow(showData.id, rate, sessionContext.guest_session_id)
        }
      />
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
