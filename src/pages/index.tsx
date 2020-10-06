import { GetStaticProps, GetStaticPaths } from 'next';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  return <h1>Hello, this is the init setup!</h1>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
