import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import { fetchAPI } from '../lib/api';
import { Show } from '../lib/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPopularShows = () => {
    setLoading(true);
    fetchAPI()
      .then((dataJson) => {
        setLoading(false);
        setData(dataJson);
      })
      .catch((e) => console.log('Connection error', e));
  };

  useEffect(() => {
    getPopularShows();
  }, []);

  return (
    <Layout>
      <h2>Popular TV shows</h2>
      {loading ? <h2>Loading</h2> : ''}
      {data.map((item: Show, index) => (
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
