import Head from 'next/head';
import RefreshStyle from '../../styles/Refresh.module.css';

const Refresh = (props) => {
	let refreshClasses = [RefreshStyle.refreshSign];
	let containerClasses = [RefreshStyle.refresh];
	if(props.isLoading){
		refreshClasses.push(RefreshStyle.animationRotate);
		containerClasses.push(RefreshStyle.loading);
	}
	return (
		<div className={containerClasses.join(" ")} onClick={props.callback}>
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>

			Refresh <span className={refreshClasses.join(" ")}><i className="fas fa-sync-alt"></i></span>
		</div>
	);
}

export default Refresh;