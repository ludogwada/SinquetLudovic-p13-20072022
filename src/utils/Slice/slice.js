import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
	isConnected: false,
	token: null,
	rememberMe: false,
	firstName: null,
	lastName: null,
};

const connectSlice = createSlice({
	name: 'connect',
	initialState,
	reducers: {
		getToken: (state, action) => {
			return {
				...state,
				email: action.payload.email,
				rememberMe: action.payload.rememberMe,
				isConnected: true,
				token: `${action.payload.token}`,
			};
		},
		getUser: (state, action) => {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		},
		signOut: (state, action) => {
			return {
				...state,
				token: null,
			};
		},
	},
});
export const { getToken, getUser } = connectSlice.actions;

export default connectSlice.reducer;
