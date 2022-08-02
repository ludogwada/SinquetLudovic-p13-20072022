import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken, getUserProfile } from '../../utils/Api/callApi';
import { getToken, getUser } from '../../utils/Slice/slice';
import { useNavigate } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const dispatch = useDispatch();
	const userToken = useSelector((state) => state.connect.token);
	const goProfile = useNavigate();

	const userProfile = async () => {
		const responseApi = await getUserProfile(userToken);
		if (responseApi) {
			dispatch(
				getUser({
					firstName: responseApi.firstName,
					lastName: responseApi.lastName,
				})
			);
		}
	};

	const submit = async () => {
		if (email && password) {
			const responseApi = await getUserToken({ email, password });
			if (responseApi) {
				dispatch(
					getToken({ token: responseApi, email: email, rememberMe: rememberMe })
				);
			}
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
						<label htmlFor='email'>email</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='input-remember'>
						<label htmlFor='remember-me'>Remember me</label>
						<input
							type='checkbox'
							id='remember-me'
							defaultChecked={false}
							value={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
					</div>
					<button type='button' className='sign-in-button' onClick={submit}>
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}

export default Login;
