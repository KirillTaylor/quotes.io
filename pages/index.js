import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ quote, setQuote ] = useState({});

  const title = 'Quotes.smaw.io';

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

  const headerProps = {
    callback: handleRefreshClick,
    title: title,
    isLoading: isLoading,
    styleHeader: styles.header
  }

  console.log(quote);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header {...headerProps}/>

      <div className={[styles.mobile, styles.mobileTooltip].join(" ")}>
          Swipe <i className="fas fa-arrow-left"></i> <i className="fas fa-arrow-right"></i> for new quotes
      </div>
      <main className={styles.main} {...swipeHandlers}>
        {quote.profilePhoto ? <div className={styles.quote_picture}>
          <img src={'/images/' + quote.profilePhoto} />
        </div> : null}
        <div id={styles.the_quote}>
          {quote.text}
        </div>
        <div id={styles.the_quote_attribute}>
          {quote.first_name}, {quote.year}
        </div>
      </main>

      <Footer {...styles} />
    </div>
  )
}
