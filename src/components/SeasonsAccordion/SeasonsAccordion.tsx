import { Episode, Season } from '../../lib/types';
import { useState } from 'react';
import { fetchSeasonDetails } from '../../lib/api';
import AccordeonArrow from './AccordionArrow.svg';
import EpisodesList from '../EpisodesList/EpisodesList';

const SeasonsAccordion: React.FC<{ season: Season; showId: number }> = ({ season, showId }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [showEpisodes, setShowEpisodes] = useState<boolean>(false);
  const [episodesList, setEpisodesList] = useState<Episode[] | null>(null);

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleListEpisodesClick = async () => {
    if (!showEpisodes) {
      if (!episodesList) {
        const { episodes } = await fetchSeasonDetails(season.season_number, showId);
        setEpisodesList(episodes);
      }
      setShowEpisodes(true);
    } else {
      setShowEpisodes(false);
    }
  };

  return (
    <article key={season.id} className="border-b shadow bg-white">
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
                onClick={handleListEpisodesClick}
              >
                Show episodes
              </button>
            </div>
            {showEpisodes ? <EpisodesList episodesList={episodesList} /> : ''}
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

export default SeasonsAccordion;
