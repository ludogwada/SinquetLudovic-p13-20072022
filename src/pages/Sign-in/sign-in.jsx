import { useState } from 'react';
import userToken from '../../utils/Api/callApi';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submit = async () => {
		if (email && password) {
			const responseApi = await userToken({ email, password });
			if (responseApi) {
				console.log(responseApi);
			} else {
				console.log(responseApi);
			}
		}
	};

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
						<input type='checkbox' id='remember-me' />
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
