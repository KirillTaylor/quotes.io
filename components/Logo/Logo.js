import Link from 'next/link'

const Logo = (props) => {
	return (
		<div className="Logo">
			<Link href="/"><a title={props.title}>{props.title}</a></Link>
		</div>
	);
}

export default Logo;