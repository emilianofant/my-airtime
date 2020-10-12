import { fetchShowDetails, postRateShow } from '../../lib/api';
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
  const [showData, setShowData] = useState<IShowDetails | null>();
  const sessionContext = useContext(SessionContext);

  useEffect(() => {
    setShowData(showDetailsProps.showDetails);
  }, [showDetailsProps.showDetails]);

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
  const showDetails = await fetchShowDetails(Number(id));
  return {
    props: {
      showDetails,
    },
  };
};
