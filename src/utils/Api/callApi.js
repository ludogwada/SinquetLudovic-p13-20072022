import axios from 'axios';

const apiUrl = axios.create({
	baseURL: ' http://localhost:3001/api/v1',
});

class CallApi {
	getUserToken = async (params) => {
		const { email, password } = params;
		const response = await apiUrl.post('/user/login', {
			email,
			password,
		});
		return response.data.body.token;
	};

	getUserProfile = async (token) => {
		const response = await apiUrl.post(
			'/user/profile',
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return response.data.body;
	};

	putUser = async (token, newUser) => {
		const response = await apiUrl.put('user/profile', newUser, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data.body;
	};
}
export default new CallApi();
