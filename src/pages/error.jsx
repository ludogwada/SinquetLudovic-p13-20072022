import { Link } from 'react-router-dom';
import '../index.css';

function Error() {
	return (
		<main>
			<article className='error'>
				<span className='error__text'>404</span>
				<span className='error__text__oups'>
					<h2>Oups! La page que vous demandez n'existe pas.</h2>
				</span>
			</article>
			<article className='redirection'>
				<Link to='/'>
					<h4 className='redirection__h4'>Retourner sur la page d'accueil</h4>
				</Link>
			</article>
		</main>
	);
}

export default Error;
