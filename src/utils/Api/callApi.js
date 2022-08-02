import axios from 'axios';

const apiUrl = axios.create({
	baseURL: ' http://localhost:3001/api/v1',
});

async function getUserToken(params) {
	const { email, password } = params;
	try {
		const response = await apiUrl.post('/user/login', {
			email,
			password,
		});
		return response.data.body.token;
	} catch (e) {
		console.log(e);
	}
}

export default getUserToken;
