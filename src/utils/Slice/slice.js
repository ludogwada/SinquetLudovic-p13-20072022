import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
	isConnected: false,
	token: null,
	remmeberMe: false,
	firstName: null,
	lastName: null,
};

const connectSlice = createSlice({
	name: 'connect',
	initialState,
	reducers: {},
});

export default connectSlice.reducer;
