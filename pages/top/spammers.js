import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

export default function Spammers(){
	const [ isLoading, setIsLoading ] = useState(false);
	const headerProps = {
		title: 'Quotes.smaw.io',
		isLoading: isLoading,
		styleHeader: styles.header
	}

	return (
		<div class={styles.container}>
			<Head>
				<title>Quotes.smaw.io</title>
			</Head>

			<Header {...headerProps} />

			<main className={styles.main}>
				<table>

				</table>
			</main>

			<Footer {...styles} />
		</div>
	);
}