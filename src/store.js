import { configureStore } from '@reduxjs/toolkit';
import connectReducer from './utils/Slice/slice';

export default configureStore({
	reducer: {
		connect: connectReducer,
	},
});
