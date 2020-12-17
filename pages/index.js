import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo/Logo'
import Refresh from '../components/Refresh/Refresh'

const handleRefreshClick = () => {

}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <header className={styles.header}>
        <Logo />
        <Refresh callback={handleRefreshClick} />
      </header>

      <main className={styles.main}>
        <div id={styles.the_quote}>
          chains of ice is good for pvp
        </div>
        <div id={styles.the_quote_attribute}>
          Felix, 2020
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
