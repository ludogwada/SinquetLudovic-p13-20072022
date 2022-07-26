import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
	isConnected: false,
	token: null,
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
				email: null,
				firstName: null,
				lastName: null,
				isConnected: false,
				token: null,
			};
		},
	},
});
export const { getToken, getUser, signOut } = connectSlice.actions;

export default connectSlice.reducer;
