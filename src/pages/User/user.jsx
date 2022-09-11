import { useDispatch, useSelector } from 'react-redux';
import transaction from '../../data/transactions.json';
import Card from '../../components/Card/card';
import { useState } from 'react';
import callApi from '../../utils/Api/callApi';
import { getUser } from '../../utils/Slice/slice';

function User() {
	const stateFirstName = useSelector((state) => state.connect.firstName);
	const stateLastName = useSelector((state) => state.connect.lastName);
	const tokenUser = useSelector((state) => state.connect.token);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [displayEditUser, setDisplayEditUser] = useState(false);
	const dispatch = useDispatch();

	const displayFormEdit = () => {
		setDisplayEditUser(!displayEditUser);
	};

	const editUser = async () => {
		const responseApi = await callApi.putUser(tokenUser, {
			firstName,
			lastName,
		});
		dispatch(
			getUser({
				firstName: responseApi.firstName,
				lastName: responseApi.lastName,
			})
		);
		setDisplayEditUser(!displayEditUser);
	};
	if (tokenUser) {
		return (
			<main className='main bg-dark mainUser'>
				<div className='user-header'>
					{displayEditUser ? (
						<>
							<h1>Welcome back</h1>
							<form>
								<div className='labelEdit'>
									<label htmlFor='firstName'>
										<input
											placeholder='First Name'
											type='text'
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</label>
									<label htmlFor='lastName'>
										<input
											placeholder='Last Name'
											type='text'
											onChange={(e) => setLastName(e.target.value)}
										/>
									</label>
								</div>
								<div>
									<button
										className='edit-button'
										type='button'
										onClick={() => displayFormEdit()}>
										Cancel
									</button>
									<button
										className='edit-button'
										type='button'
										onClick={() => editUser()}>
										Save
									</button>
								</div>
							</form>
						</>
					) : (
						<>
							<h1>
								Welcome back
								<br />
								{stateFirstName + ' ' + stateLastName}!
							</h1>
							<button className='edit-button' onClick={() => displayFormEdit()}>
								Edit Name
							</button>
						</>
					)}
				</div>
				<h2 className='sr-only'>Accounts</h2>
				{transaction.map((account) => {
					return (
						<Card
							key={account.id}
							name={account.name}
							amount={account.amount}
							balance={account.balance}
						/>
					);
				})}
			</main>
		);
	}
}

export default User;
