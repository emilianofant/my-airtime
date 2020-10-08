import { Season } from '../../lib/types';
import { useState } from 'react';
import AccordeonArrow from './AccordionArrow.svg';

// export default function EpisodesAccordion(seasons: Season[]): JSX.Element {
const EpisodesAccordion: React.FC<{ season: Season }> = ({ season }) => {
  const [isCollapsed, setisCollapsed] = useState<boolean>(true);

  const handleClick = () => {
    setisCollapsed(!isCollapsed);
  };

  return (
    <div>
      <article key={season.id} className="border-b shadow">
        <div
          className={`border-l-2 ${
            isCollapsed ? 'border-transparent' : 'bg-grey-lightest border-blue-500'
          }`}
        >
          <header
            className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
            onClick={handleClick}
          >
            <span
              className={`${isCollapsed ? 'text-grey-darkest' : 'text-blue-500'} font-thin text-xl`}
            >
              Season {season.season_number} | Episodes: {season.episode_count}
            </span>
            <div
              className={`rounded-full border border-grey w-7 h-7 flex items-center justify-center ${
                isCollapsed ? '' : 'bg-blue-200'
              }`}
            >
              <AccordeonArrow>
                {!isCollapsed ? (
                  <polyline points="18 15 12 9 6 15"></polyline>
                ) : (
                  <polyline points="6 9 12 15 18 9"></polyline>
                )}
              </AccordeonArrow>
            </div>
          </header>
          {!isCollapsed ? (
            <div>
              <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul className="pl-4">
                  <li className="pb-2">consectetur adipiscing elit</li>
                  <li className="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </li>
                  <li className="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </article>
    </div>
  );
};

export default EpisodesAccordion;
