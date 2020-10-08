import { Season } from '../../lib/types';
import { useState } from 'react';
import AccordeonArrow from './AccordionArrow.svg';
import { fetchSeasonDetail } from '../../lib/api';

// export default function EpisodesAccordion(seasons: Season[]): JSX.Element {
const EpisodesAccordion: React.FC<{ season: Season; showId: number }> = ({ season, showId }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleListEpisodeClick = async () => {
    const { episodes } = await fetchSeasonDetail(season.season_number, showId);
    console.log(episodes);
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
            onClick={handleCollapseClick}
          >
            <span className="text-xs">{season.air_date.match(/^\d{4}/)[0]}</span>
            <span
              className={`${isCollapsed ? 'text-grey-darkest' : 'text-blue-500'} font-thin text-xl`}
            >
              {season.name} | Episodes: {season.episode_count}
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
                  <li className="pb-2 italic"> {season.overview || 'No information available'} </li>
                </ul>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleListEpisodeClick}
                >
                  List episodes
                </button>
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
