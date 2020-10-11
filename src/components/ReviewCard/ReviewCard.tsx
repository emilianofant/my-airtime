import { Review } from '../../lib/types';

const ReviewCard: React.FC<{ reviewCardProps: Review }> = ({ reviewCardProps }) => {
  return (
    <div className="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
      <div>
        {/* <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2> */}
        <p className="mt-2 text-gray-600 italic">-&apos;{reviewCardProps.content}&apos;</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {reviewCardProps.author}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
