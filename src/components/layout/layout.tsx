import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import TvSvg from '../../../public/watching-tv.svg';

export const siteTitle = 'My Airtime - TV Shows database';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Search over `themoviedb` for your favorite TV shows!" />
        <meta name="og:title" content={siteTitle} />
        <link
          rel="shortcut icon"
          href="https://cdn.iconscout.com/icon/premium/png-256-thumb/television-2437710-2019939.png"
          type="image/x-icon"
        ></link>
      </Head>
      <header className="w-full px-6 bg-white">
        <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
          <Link href="/">
            <a className="block py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center">
              <TvSvg className={styles.icon} />
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                My Airtime!
              </h1>
            </a>
          </Link>
          <div className="w-full md:w-auto text-center md:text-right"></div>
        </div>
      </header>
      <nav className="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light">
        <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
          <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
            <Link href="/">
              <a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">
                TV Shows
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right"></div>
        </div>
      </nav>
      <main className="mb-auto">{props.children}</main>
      <footer className="w-full bg-white px-6 border-t">
        <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
          &copy;2020 My Airtime. All rights reserved.
          <div className="pt-4 md:p-0 text-center md:text-right text-xs">
            <Link href="/">
              <a className="text-black no-underline hover:underline ml-4">Contact me</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
