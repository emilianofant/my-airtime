import '../styles/index.css';
import { AppProps } from 'next/app';
import SessionProvider from '../store/SessionProvider';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
