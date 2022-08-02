import { useSelector } from 'react-redux';
import transaction from '../../data/transactions.json';
import Card from '../../components/Card/card';

function User() {
	const firstName = useSelector((state) => state.connect.firstName);
	const lastName = useSelector((state) => state.connect.lastName);

	return (
		<main className='main bg-dark'>
			<div className='user-header'>
				<h1>
					Welcome back
					<br />
					{firstName + ' ' + lastName}!
				</h1>
				<button className='edit-button'>Edit Name</button>
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

export default User;
