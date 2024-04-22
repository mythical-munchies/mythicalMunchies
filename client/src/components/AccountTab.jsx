import React, { useState, useEffect } from 'react';
import '../styles/AccountTab.css';
import Login from './Login';
import SignUp from './SignUp';
// ELENI IMPORT - COPY REGISTER LOGIC INTO SIGN UP.JSX
// import Register from "./Register"

const AccountTab = ({ authenticate }) => {
	const [accountData, setAccountData] = useState({
		username: '',
		first: '',
		last: '',
		email: '',
		password: '',
		about: '',
	});
	const [auth, setAuth] = useState({});

	useEffect(() => {
		const attemptLoginWithToken = async () => {
			const response = await fetch(
				'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const json = await response.json();
			if (response.ok) {
				setAuth(json);
			}
		};
		const token = window.localStorage.getItem('token');
		if (token) {
			attemptLoginWithToken();
		}
	}, []);

	const login = async (credentials) => {
		let response = await fetch(
			'http://mythincalmunchies.onrender.com/mythicalmunchies/users/login',
			{
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		let json = await response.json();
		if (response.ok) {
			const token = json.token;
			window.localStorage.setItem('token', token);
			response = await fetch(
				'http://mythicalmunchies.onrender.com/mythicalmunchies/users/login',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log('logged in');
			json = await response.json();

			if (response.ok) {
				setAuth(json);
			}
		} else {
			console.log('howdy', json);
		}
	};

	const logout = () => {
		window.localStorage.removeItem('token');
		setAuth({})
		console.log("you are logged out");
	};

	const handleUpdate = (e) => {
		const { key, value } = e.target;
		setAccountData({ ...accountData, [key]: value });
	};

	const handleSubmit = (e) => {
		e.prevent.Default();
	};

	// ADD EVENT LISTENER TO STOP PAGE RELOAD AFTER BUTTON CLICK
	const stopReload = (e) => {
		e.prevent.Default();
	};

	return (
		<>
			<div className='largest-contain'>
				<div className='main-contain'>
					<button
						data-drawer-target='default-sidebar'
						data-drawer-toggle='default-sidebar'
						aria-controls='default-sidebar'
						type='button'
						className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
						<span className='sr-only'>Open sidebar</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								clipRule='evenodd'
								fillRule='evenodd'
								d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
						</svg>
					</button>
					{/* content should only be shown if login AUTH */}

					{/* ACCOUNT - EDIT FORM */}
					<div className='containerBig'>
						<div id='testin'>
							<div className='account-testin'>
								<h3 className='edit'>Edit your Account Information</h3>
							</div>
							<form id='account-edit' className='max-w-sm mx-auto'>
								<div className='mb-5'>
									<label
										id='textington'
										htmlFor='username'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Username:
									</label>
									<input
										type='username'
										id='username'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='kingOFtheNorth'
										required
									/>
								</div>
								<div className='mb-5'>
									<label
										id='textington'
										htmlFor='firstName'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										First Name:
									</label>
									<input
										type='name'
										id='firstName'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='John'
										required
									/>
								</div>
								<div className='mb-5'>
									<label
										id='textington'
										htmlFor='lastName'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Last Name:
									</label>
									<input
										type='name'
										id='lastName'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Snow'
										required
									/>
								</div>
								<div className='mb-5'>
									<label
										id='textington'
										htmlFor='email'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										{' '}
										Email:
									</label>
									<input
										type='email'
										id='email'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='johnsnow@gmail.com'
										required
									/>
								</div>
								<div className='mb-5'>
									<label
										id='textington'
										htmlFor='password'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Password:
									</label>
									<input
										type='password'
										id='password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='***********'
										required
									/>
								</div>
								<div className='max-w-sm mx-auto'>
									<label
										id='textington'
										htmlFor='message'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										About You:
									</label>
									<textarea
										id='message'
										rows='4'
										className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='I am John Snow, King of the North. Since I killed my only love, I now spend my time as a food critic. Maybe one day I will start sharing my own recipe ideas.'></textarea>
								</div>
								<button
									onClick={handleSubmit}
									id='account-submit'
									type='submit'
									className='text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'>
									Update
								</button>
							</form>
						</div>
					</div>

					{/* THIS IS THE PERSISTENT SIDEBAR */}
					<aside
						id='default-sidebar'
						className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
						aria-label='Sidebar'>
						<div
							id='sideBar'
							className='h-full px-3 py-4 overflow-y-auto bg-white-50 dark:bg-gray-800'>
							<div>
								<h1 className='welcome-user'>Welcome Back!</h1>
							</div>
							<span className='logout-container'>
								<button className='logout-button' onClick={ logout }>
									Logout
								</button>
							</span>
							<ul className='space-y-2 font-medium'>
								<li className='sideBar-button'>
									<a
										onClick={stopReload}
										href='/account'
										className='flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group'>
										<svg
											className='w-6 h-6 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path
												fillRule='evenodd'
												d='M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z'
												clipRule='evenodd'
											/>
										</svg>

										<span
											id='side-bar-texty'
											className='flex-1 ms-3 whitespace-nowrap'>
											Account Details
										</span>
									</a>
								</li>

								<li className='sideBar-button'>
									<a
										onClick={stopReload}
										href='/bookmarks'
										className='flex items-center p-2 text-blue-900 rounded-lg   dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group'>
										<svg
											className='w-[30px] h-[30px] text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z' />
										</svg>
										<span className='flex-1 ms-3 whitespace-nowrap'>
											Bookmarks
										</span>
									</a>
								</li>

								<li className='sideBar-button'>
									<a
										onClick={stopReload}
										href='/my-reviews'
										className='flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group'>
										<svg
											className='w-[30px] h-[30px] text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'>
											<path
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1.3'
												d='M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28'
											/>
										</svg>
										<span className='flex-1 ms-3 whitespace-nowrap'>
											Reviews
										</span>
									</a>
								</li>

								{/* import login modal - these function when the sidebar button is clicked  */}
								<Login />

								{/* import signup modal - these function when the sidebar button is clicked */}
								<SignUp />
							</ul>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
};

export default AccountTab;
