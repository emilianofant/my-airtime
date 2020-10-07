import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { fetchAPI } from '../lib/api';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = useState([]);

  const getPopularShows = () => {
    fetchAPI().then((dataJson) => {
      setData(dataJson.results);
    });
  };

  useEffect(() => {
    getPopularShows();
  }, []);

  return (
    <Layout>
      <h1>Test</h1>
      {data.map((item, index) => (
        <div key={index}>{item.original_name}</div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
