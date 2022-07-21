import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<Link className='header__link' to='/'>
				<img className='header__link__logo' src={logo} alt='logo argentBank' />
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			<nav>
				<Link to='/sign-in' className='header__login'>
					<i className='fa-solid fa-circle-user'></i>
					<p className='header__login__text'>Sign In</p>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
