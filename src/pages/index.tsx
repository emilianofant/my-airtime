import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import ShowCard from '../components/showCard/showCard';
import { fetchPopularShows, fetchSearchShows } from '../lib/api';
import { Show } from '../lib/types';
import SearchInput from '../components/SearchInput/SearchInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getPopularShows = () => {
    setLoading(true);
    fetchPopularShows()
      .then((dataJson) => {
        setLoading(false);
        setData(dataJson);
      })
      .catch((e) => console.log('Connection error', e));
  };

  const onSearchInputChange = (query: string) => {
    if (!isLoading && query.length > 2) {
      setLoading(true);
      fetchSearchShows(query)
        .then((dataJson) => {
          setLoading(false);
          setData(dataJson);
        })
        .catch((e) => console.log('Connection error', e));
    }
  };

  useEffect(() => {
    getPopularShows();
  }, []);

  return (
    <Layout>
      <h1 className="text-center text-xl md:text-4xl px-6 py-4 bg-light-grey">Popular TV shows</h1>
      <div className="container max-w-4xl mx-auto pb-10 flex mt-5">
        <SearchInput
          onChange={(e) => {
            onSearchInputChange(e);
          }}
        />
      </div>
      <div className="container max-w-4xl mx-auto pb-10 flex flex-wrap">
        {isLoading ? <h2>Loading</h2> : ''}
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
