import { Review } from '../../lib/types';

export const ReviewCard: React.FC<{ reviewCardProps: Review }> = () => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-auto">
      <div>
        {/* <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2> */}
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
      </div>
    </div>
  );
};
