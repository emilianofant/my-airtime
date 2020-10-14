import { useEffect, useState } from 'react';
import { IPagination } from '../../lib/types';
import Arrow from './arrow.svg';

interface PaginationProps {
  data: IPagination;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [hasPrev, setHasPrev] = useState<boolean>(false);

  useEffect(() => {
    if (props.data) {
      setHasNext(currentPage < props.data.total_pages);
      setHasPrev(currentPage > 1);
    }
  }, [currentPage, props]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    props.onPageChange(currentPage);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    props.onPageChange(currentPage);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className={`border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-blue-500 hover:text-white ${
            hasPrev ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handlePrevClick}
          disabled={!hasPrev}
        >
          <Arrow className="w-6 mr-5 fill-current transform rotate-180"></Arrow>
          Previous page
        </button>
        <button
          className={`border border-blue-500 text-blue-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-blue-500 hover:text-white ${
            hasNext ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleNextClick}
          disabled={!hasNext}
        >
          Next page
          <Arrow className="w-6 ml-5 fill-current"></Arrow>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
