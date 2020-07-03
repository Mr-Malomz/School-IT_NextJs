import React from 'react';
import AuthLayout from '../../components/AuthLayout';

const Dashboard = () => {
	return (
		<AuthLayout pageTitle='Dashboard'>
			<h3 className='text-2xl font-semibold mb-6 capitalize'>summary</h3>
			<p className='text-xs font-semibold opacity-50 mb-6'>
				02 - January - 2020
			</p>
			<section className='mb-6 lg:flex lg:justify-between'>
				<div className='bg-white h-40 rounded-lg shadow-lg p-5 mb-6 w-full lg:mr-8'>
					<span
						className='text-xs w-32  text-center py-1 rounded-full inline-block capitalize font-semibold'
						style={{ background: 'rgba(28, 51, 167, 0.3)' }}
					>
						attendance
					</span>
					<h1 className='text-center mt-6'>
						<span className='text-4xl font-semibold'>300</span>
						<span className='text-base font-semibold opacity-75'>
							{' '}
							/ 400
						</span>
					</h1>
				</div>
				<div className='bg-white h-40 rounded-lg shadow-lg p-5 mb-6 w-full lg:mr-8'>
					<span
						className='text-xs w-32  text-center py-1 rounded-full inline-block capitalize font-semibold'
						style={{ background: 'rgba(167, 87, 28, 0.3)' }}
					>
						expenses
					</span>
					<h1 className='text-center mt-6'>
						<span className='text-4xl font-semibold'>
							₦ 300,000{' '}
						</span>
					</h1>
				</div>
				<div className='bg-white h-40 rounded-lg shadow-lg p-5 w-full'>
					<span
						className='text-xs w-32  text-center py-1 rounded-full inline-block capitalize font-semibold'
						style={{ background: 'rgba(255, 185, 185, 0.3)' }}
					>
						events
					</span>
					<h1 className='text-center mt-6'>
						<span className='text-4xl font-semibold'>15</span>
					</h1>
				</div>
			</section>
			<section>
				<h3 className='text-2xl font-semibold mb-6 capitalize'>
					employee's tracker
				</h3>
                <table className='w-full'>
                    <thead>
                        <tr className='mb-3'>
                            <th className='uppercase opacity-50 text-xs  text-left'>personnel details</th>
                            <th className='uppercase opacity-50 text-xs  text-left'>date</th>
                            <th className='uppercase opacity-50 text-xs  text-left'>department</th>
                            <th className='uppercase opacity-50 text-xs  text-left'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white h-10'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
			</section>
		</AuthLayout>
	);
};

export default Dashboard;
