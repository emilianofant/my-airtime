import { useCallback, useEffect, useState } from 'react';
import StarfullSVG from './starFull.svg';

const RatingStars: React.FC<{ total: number; onChange }> = (props) => {
  const [score, setScore] = useState<number>(0);
  const [fullStars, setFullStars] = useState<JSX.Element[]>([]);

  const configStars = useCallback(() => {
    const fst: JSX.Element[] = [];
    for (let i = 0; i < score; i++) {
      fst.push(<StarfullSVG />);
    }
    setFullStars(fst);
  }, [score]);

  const handleStarClick = (index: number) => {
    props.onChange(index + 1);
  };

  useEffect(() => {
    setScore(props.total);
    configStars();
  }, [configStars, props.total, score]);

  return (
    <div className="flex">
      {fullStars.map((i, index) => (
        <div
          className="w-5 h-5 text-red-500 hover:text-blue-500"
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