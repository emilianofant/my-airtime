import { Episode } from '../../lib/types';

const EpisodesList: React.FC<{ episodesList: Episode[] }> = ({ episodesList }) => {
  return (
    <div className="">
      <div className="sm:flex sm:items-center px-2 py-4">
        <div className="flex-grow">
          <h3 className="font-normal px-2 py-3 leading-tight">Contacts</h3>
          <div className="w-full">
            {episodesList.map((episode) => (
              <div
                className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded"
                key={episode.id}
              >
                <div className="w-8 h-10 text-center py-1">
                  <p className="p-0 text-green-dark">{episode.episode_number}</p>
                </div>
                <div className="w-4/5 h-10 py-3 px-1">
                  <p className="hover:text-blue-dark">{episode.name}</p>
                </div>
                <div className="w-1/5 h-10 text-right p-3">
                  <p className="text-sm text-grey-dark">Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
