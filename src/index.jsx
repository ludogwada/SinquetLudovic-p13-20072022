import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/home';
import Login from './pages/Sign-in/sign-in';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import User from './pages/User/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-in' element={<Login />} />
				<Route path='/user' element={<User />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
