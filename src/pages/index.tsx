import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../components/layout/layout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Test</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
