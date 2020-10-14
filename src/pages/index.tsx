import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';
import { Layout, ShowCard, SearchInput, Pagination } from '../components';
import { fetchPopularShows, fetchSearchShows } from '../lib/api';
import { Show, IPagination } from '../lib/types';

const IndexPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState<IPagination>(null);

  const getPopularShows = (page: number) => {
    setLoading(true);
    fetchPopularShows(page)
      .then((dataJson) => {
        setLoading(false);
        setData(dataJson.results);
        const { page, total_results, total_pages } = dataJson;
        setPaginationData({ page, total_results, total_pages });
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
    getPopularShows(1);
  }, []);

  return (
    <Layout>
      <h1 className="text-center text-xl md:text-4xl px-6 py-4 bg-light-grey">Popular TV shows</h1>
      <div className="container max-w-4xl mx-auto pb-10 flex mt-5">
        <SearchInput
          onChange={(e: string) => {
            onSearchInputChange(e);
          }}
        />
      </div>
      <div className="container max-w-4xl mx-auto pb-10 flex flex-wrap">
        {isLoading ? (
          <h2>Loading</h2>
        ) : data.length > 0 ? (
          data.map((item: Show) => <ShowCard show={item} key={item.id} />)
        ) : (
          <h2>No shows found.</h2>
        )}
      </div>
      <Pagination data={paginationData} onPageChange={getPopularShows}></Pagination>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default IndexPage;
