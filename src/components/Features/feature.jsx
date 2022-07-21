import chat from '../../assets/icon-chat.png';
import money from '../../assets/icon-money.png';
import security from '../../assets/icon-security.png';

function Feature(props) {
	const { id, title, text } = props;

	let icon = '';
	let alt = '';

	switch (id) {
		case 'chat':
			icon = chat;
			break;

		case 'money':
			icon = money;
			break;

		case 'security':
			icon = security;
			break;
		default:
			console.log('erreur icon');
	}

	return (
		<section className='feature-item'>
			<img src={icon} alt={alt} className='feature-icon' />
			<h3 className='feature-item-title'>{title}</h3>
			<p>{text}</p>
		</section>
	);
}

export default Feature;
