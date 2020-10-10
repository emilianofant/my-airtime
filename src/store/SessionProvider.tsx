import { useEffect, useState } from 'react';
import { fetchGetGuestSessionToken } from '../lib/api';
import SessionContext from './SessionContext';

const SessionProvider: React.FC = ({ children }) => {
  // @todo: create Session type
  const [sessionState, setSessionState] = useState('test');

  const getGuestSession = async () => {
    const guestSession = await fetchGetGuestSessionToken();
    setSessionState(guestSession);
  };

  useEffect(() => {
    getGuestSession();
  }, []);

  return <SessionContext.Provider value={sessionState}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
