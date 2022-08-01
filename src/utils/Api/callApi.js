import axios from 'axios';

// const apiUrl = axios.create({
// 	baseURL: ' ',
// });

async function userToken(params) {
	const { email, password } = params;
	try {
		const response = await axios.post(
			'http://localhost:3001/api/v1/user/login',
			{
				email,
				password,
			}
		);
		return console.log(response);
	} catch (e) {
		console.log(e);
	}
}

export default userToken;
