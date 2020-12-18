import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo/Logo'
import Refresh from '../components/Refresh/Refresh'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'


export default function Home() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ quote, setQuote ] = useState({});

  const title = 'Quotes.smaw.io';

  const currentDate = new Date();

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

  const swipeHandlers = useSwipeable({
    onSwiped: (ev) => {
      setIsLoading(true);
      retreiveAQuote();
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <Logo title={title} />
        <Refresh callback={handleRefreshClick} isLoading={isLoading} />
      </header>
      <div className={[styles.mobile, styles.mobileTooltip].join(" ")}>
          Swipe <i class="fas fa-arrow-left"></i> <i class="fas fa-arrow-right"></i> for new quotes
      </div>
      <main className={styles.main} {...swipeHandlers}>
        <div id={styles.the_quote}>
          {quote.text}
        </div>
        <div id={styles.the_quote_attribute}>
          {quote.first_name}, {quote.year}
        </div>
      </main>

      <footer className={styles.footer}>
        <div id={styles.copyright}>
          All rights reserved to <a href="#">Kirill Taylor</a> &copy; {currentDate.getFullYear()}
        </div>
      </footer>
    </div>
  )
}
