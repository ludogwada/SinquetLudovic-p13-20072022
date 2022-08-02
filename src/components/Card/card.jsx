import React from 'react';

function Card(params) {
	const { name, amount, balance } = params;
	return (
		<>
			<section className='account'>
				<div className='account-content-wrapper'>
					<h3 className='account-title'>Argent Bank {name}</h3>
					<p className='account-amount'>{amount}</p>
					<p className='account-amount-description'>{balance} Balance</p>
				</div>
				<div className='account-content-wrapper cta'>
					<button className='transaction-button'>View transactions</button>
				</div>
			</section>
		</>
	);
}
export default Card;
