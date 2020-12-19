import Logo from './Logo/Logo';
import MainMenu from './MainMenu';
import Refresh from './Refresh/Refresh';
import { useState } from 'react';

export default function Header(props){
	const [ isOpen, setIsOpen ] = useState(false);

	function handleClickMobile(){
		setIsOpen(!isOpen);
	}

	return (
		<header className={props.styleHeader}>
			<MainMenu isMobile={true} isOpen={isOpen} callback={handleClickMobile} />
			<Logo title={props.title} />
			<MainMenu isMobile={false} />
			{props.callback ? <Refresh callback={props.callback} isLoading={props.isLoading} /> : null}
      	</header>
	);
}