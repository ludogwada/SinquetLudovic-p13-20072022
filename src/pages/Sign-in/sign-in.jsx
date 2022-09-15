import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import callApi from '../../utils/Api/callApi';
import { getToken, getUser } from '../../utils/Slice/slice';
import { useNavigate } from 'react-router-dom';

let emailStorage = '';
let rememberMeChecked = '';

if (sessionStorage.email && sessionStorage.rememberMe !== '') {
	emailStorage = sessionStorage.getItem('email');
	rememberMeChecked = JSON.parse(sessionStorage.getItem('rememberMe'));
}

function Login() {
	const [email, setEmail] = useState(emailStorage);
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(rememberMeChecked);
	const [errorForm, setErrorForm] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPwd, setErrorPwd] = useState(false);
	const dispatch = useDispatch();
	const userToken = useSelector((state) => state.connect.token);
	const goProfile = useNavigate();

	const userProfile = async () => {
		const responseApi = await callApi.getUserProfile(userToken);
		if (responseApi) {
			dispatch(
				getUser({
					firstName: responseApi.firstName,
					lastName: responseApi.lastName,
				})
			);
		}
	};

	const remember = () => {
		if (rememberMe !== '') {
			sessionStorage.email = email;
			sessionStorage.rememberMe = rememberMe;
		}
	};

	const fieldsValided = () => {
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			setErrorEmail(true);
		} else {
			setErrorEmail(false);
		}
		if (password.length < 6) {
			setErrorPwd(true);
		} else {
			setErrorPwd(false);
		}
	};

	const submit = async () => {
		fieldsValided();

		try {
			const responseApi = await callApi.getUserToken({ email, password });
			if (responseApi) {
				dispatch(getToken({ token: responseApi, email: email }));
			}
			remember();
		} catch (error) {
			setErrorForm(true);
		}
	};

	useEffect(() => {
		if (userToken) {
			userProfile();
			goProfile('/user');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userToken]);

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form>
					<div className='input-wrapper'>
						<label htmlFor='email'>Username</label>
						<input
							type='email'
							required
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errorEmail ? (
							<span className='errorMessage'>incorrect email</span>
						) : null}
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							required
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{errorPwd ? (
							<span className='errorMessage'>incorrect password</span>
						) : null}
					</div>
					<div className='input-remember'>
						<label htmlFor='remember-me'>Remember me</label>
						<input
							type='checkbox'
							id='remember-me'
							checked={rememberMe}
							value='rememberMe'
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
					</div>
					<button type='button' className='sign-in-button' onClick={submit}>
						Sign In
					</button>
					{errorForm ? (
						<span className='errorMessage'>Authentication Failure</span>
					) : null}
				</form>
			</section>
		</main>
	);
}

export default Login;
