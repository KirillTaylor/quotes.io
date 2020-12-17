import Head from 'next/head';

const Refresh = (props) => {
	return (
		<div className="Refresh" onClick={props.callback}>
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>

			Refresh <span className="refresh-sign"><i class="fas fa-sync-alt"></i></span>
		</div>
	);
}

export default Refresh;