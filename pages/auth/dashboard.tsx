import React, { CSSProperties } from 'react';
import AuthLayout from '../../components/AuthLayout';
import Link from 'next/link';
import ArrowDown from '../../public/utils/svg/ArrowDown';

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
				<table className='w-full mb-6' style={styles.table}>
					<thead>
						<tr>
							<th className='uppercase opacity-50 text-xs  text-left pl-2 lg:pl-3'>
								personnel details
							</th>
							<th className='uppercase opacity-50 text-xs  text-left hidden lg:block'>
								date
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								department
							</th>
							<th className='uppercase opacity-50 text-xs text-left'>
								status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='bg-white h-10 text-xs'>
							<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 w-8 mr-4 border-brand-main inline-block border-2 rounded-full'
									alt='profile picture'
								/>
								<span>Aderinsola Emmanuel</span>
							</td>
							<td className='hidden lg:inline-flex lg:mt-3'>
								02 - 01 - 2020
							</td>
							<td>Teaching</td>
							<td className='rounded-tr-lg rounded-br-lg'>
								<span
									className='w-24 text-center py-1 inline-block rounded-lg'
									style={{
										background: 'rgba(73, 167, 28, 0.3)',
									}}
								>
									Present
								</span>
							</td>
						</tr>
						<tr className='bg-white h-10 text-xs'>
							<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 w-8 mr-4 border-brand-main inline-block border-2 rounded-full'
									alt='profile picture'
								/>
								<span>Aderinsola Emmanuel</span>
							</td>
							<td className='hidden lg:inline-flex lg:mt-3'>
								02 - 01 - 2020
							</td>
							<td>Teaching</td>
							<td className='rounded-tr-lg rounded-br-lg'>
								<span
									className='w-24 text-center py-1 inline-block rounded-lg'
									style={{
										background: 'rgba(73, 167, 28, 0.3)',
									}}
								>
									Present
								</span>
							</td>
						</tr>
						<tr className='bg-white h-10 text-xs'>
							<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 w-8 mr-4 border-brand-main inline-block border-2 rounded-full'
									alt='profile picture'
								/>
								<span>Aderinsola Emmanuel</span>
							</td>
							<td className='hidden lg:inline-flex lg:mt-3'>
								02 - 01 - 2020
							</td>
							<td>Teaching</td>
							<td className='rounded-tr-lg rounded-br-lg'>
								<span
									className='w-24 text-center py-1 inline-block rounded-lg'
									style={{
										background: 'rgba(255, 0, 0, 0.3)',
									}}
								>
									Absent
								</span>
							</td>
						</tr>
						<tr className='bg-white h-10 text-xs'>
							<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 w-8 mr-4 border-brand-main inline-block border-2 rounded-full'
									alt='profile picture'
								/>
								<span>Aderinsola Emmanuel</span>
							</td>
							<td className='hidden lg:inline-flex lg:mt-3'>
								02 - 01 - 2020
							</td>
							<td>Teaching</td>
							<td className='rounded-tr-lg rounded-br-lg'>
								<span
									className='w-24 text-center py-1 inline-block rounded-lg'
									style={{
										background: 'rgba(73, 167, 28, 0.3)',
									}}
								>
									Present
								</span>
							</td>
						</tr>
						<tr className='bg-white h-10 text-xs'>
							<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
								<img
									src='https://via.placeholder.com/150'
									className='h-8 w-8 mr-4 border-brand-main inline-block border-2 rounded-full'
									alt='profile picture'
								/>
								<span>Aderinsola Emmanuel</span>
							</td>
							<td className='hidden lg:inline-flex lg:mt-3'>
								02 - 01 - 2020
							</td>
							<td>Teaching</td>
							<td className='rounded-tr-lg rounded-br-lg'>
								<span
									className='w-24 text-center py-1 inline-block rounded-lg'
									style={{
										background: 'rgba(255, 0, 0, 0.3)',
									}}
								>
									Absent
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<Link href='#'>
					<a className='uppercase text-xs font-semibold text-center opacity-75 block'>
						load more <ArrowDown />
					</a>
				</Link>
			</section>
		</AuthLayout>
	);
};

const styles = {
	table: {
		borderCollapse: 'separate',
		borderSpacing: '0 7px',
	} as CSSProperties,
};

export default Dashboard;
