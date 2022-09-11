import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../utils/Slice/slice';

function Header() {
	const isConnected = useSelector((state) => state.connect.isConnected);
	const firstName = useSelector((state) => state.connect.firstName);
	const dispatch = useDispatch();

	function SignOut() {
		dispatch(signOut());
	}

	return (
		<>
			<header className='header'>
				<Link className='header__link' to='/'>
					<img
						className='header__link__logo'
						src={logo}
						alt='logo argentBank'
					/>
					<h1 className='sr-only'>Argent Bank</h1>
				</Link>

				{isConnected ? (
					<nav className='header__login'>
						<i className='fa-solid fa-circle-user'></i>
						{firstName}
						<Link to='/' onClick={() => SignOut()} className='header__login'>
							<i className='fa fa-sign-out'></i>
							<p className='header__login__text'>Sign Out</p>
						</Link>
					</nav>
				) : (
					<Link to='/sign-in' className='header__login'>
						<i className='fa-solid fa-circle-user'></i>
						<p className='header__login__text'>Sign In</p>
					</Link>
				)}
			</header>
		</>
	);
}

export default Header;
