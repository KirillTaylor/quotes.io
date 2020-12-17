import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo/Logo'
import Refresh from '../components/Refresh/Refresh'
import { useEffect, useState } from 'react'


export default function Home() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ quote, setQuote ] = useState({});

  const title = 'Quotes.io';

  const retreiveAQuote = (id) => {
    fetch(id ? `/api/quote/${id}` : '/api/quote')
    .then(res => res.json())
    .then(
      res => {
        setQuote(res);
        setIsLoading(false);
      },
      error => {
        setIsLoading(false);
        //throw new Error(error);
      }
    )
  }
  const handleRefreshClick = () => {
    setIsLoading(true);
    retreiveAQuote();
  }

  useEffect( () => {
    if( !isLoading && Object.keys(quote).length === 0 ){
      setIsLoading(true);
      retreiveAQuote();
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <Logo title={title} />
        <Refresh callback={handleRefreshClick} isLoading={isLoading} />
      </header>

      <main className={styles.main}>
        <div id={styles.the_quote}>
          {quote.text}
        </div>
        <div id={styles.the_quote_attribute}>
          {quote.first_name}, {quote.year}
        </div>
      </main>

      <footer>
        <div id={styles.copyright}>
          All rights reserved &copy; 2020
        </div>
      </footer>
    </div>
  )
}
