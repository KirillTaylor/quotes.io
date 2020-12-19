import Link from 'next/link';
import menuStyles from '../styles/MainMenu.module.css'

export default function MainMenu(props){
	let menuItems = [];
	if(props.isMobile){
		menuItems.push({
			link: '/',
			name: 'Home'
		})
	}
	menuItems.push({
		link: '/top/spammers',
		name: 'Top Spammers'
	});
	menuItems.push({
		link: '/top/words',
		name: 'Top Words'
	});

	const menuItemIterator = menuItems.map( (item, key) => {
		return <li key={key}><Link href={item.link}><a title={item.name}>{item.name}</a></Link></li>
	});

	let navClasses = [menuStyles.main_menu];
	if(props.isMobile){
		navClasses.push("mobile");
	} else {
		navClasses.push("desktop");
	}
	
	return (
		<nav className={navClasses.join(" ")}>
			{props.isMobile 
				? <div className={menuStyles.mobile_menu} onClick={props.callback}><i className="fas fa-bars"></i><ul className={props.isOpen ? menuStyles.menuOpen : menuStyles.menuClosed }>{menuItemIterator}</ul></div> 
				: <ul>{menuItemIterator}</ul>}
		</nav>
	);
}