export default function Footer(props){
	const currentDate = new Date();
	
	return (
		<footer className={props.footer}>
			<div id={props.copyright}>
			All rights reserved to <a href="#">Kirill Taylor</a> &copy; {currentDate.getFullYear()}
			</div>
        </footer>
	);
}