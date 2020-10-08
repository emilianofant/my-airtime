import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import ShowCard from '../components/showCard/showCard';
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
      <h1 className="text-center text-xl md:text-4xl px-6 py-12 bg-white">Popular TV shows</h1>
      <div className="container max-w-4xl mx-auto pb-10 flex flex-wrap">
        {loading ? <h2>Loading</h2> : ''}
        {data.map((item: Show) => (
          <ShowCard {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
