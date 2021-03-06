import { useCallback, useEffect, useState } from 'react';
import StarfullSVG from './starFull.svg';

const RatingStars: React.FC<{ total: number; onChange }> = ({ total, onChange }) => {
  const [score, setScore] = useState<number>(0);
  const [fullStars, setFullStars] = useState<JSX.Element[]>([]);
  const [wasRated, setWasRated] = useState<boolean>(false);

  const configStars = useCallback(() => {
    const fst: JSX.Element[] = [];
    for (let i = 0; i < score; i++) {
      fst.push(<StarfullSVG />);
    }
    setFullStars(fst);
  }, [score]);

  const handleStarClick = (index: number) => {
    setWasRated(true);
    onChange(index + 1);
  };

  useEffect(() => {
    setScore(total);
    configStars();
  }, [configStars, total, score]);

  return wasRated ? (
    <span className="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle">
      Rate submitted, thanks!
    </span>
  ) : (
    <div className="flex">
      {fullStars.map((i, index) => (
        <div
          className="w-5 h-5 text-red-500 hover:text-blue-500 cursor-pointer"
          key={index}
          onClick={() => handleStarClick(index)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
