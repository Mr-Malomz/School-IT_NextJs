import React, { useState } from 'react';
import AuthLinkButton from './AuthLinkButton';
import styled from 'styled-components';
import ArrowRight from '../public/utils/svg/ArrowRight';
import ArrowDownTab from '../public/utils/svg/ArrowDownTab';
import Link from 'next/link';

const TableWrapper = styled.div`
	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 0px;
		font-size: 14px;
		margin-top: 30px;

		thead {
			th {
				border-bottom: 1px solid grey;
			}
		}

		tbody {
			tr {
				height: 2.5rem;
				&:nth-child(odd) {
					background-color: #ffffff;
				}
				&:nth-child(even) {
					background-color: #eceaea;
				}
			}
		}
	}
`;

const AccountTableSect = () => {
	const [state, setShow] = useState({
		show: false,
		index: null,
	});

	const handleToggle = (e, indx) => {
		setShow({ ...state, show: !state.show, index: indx });
	};

	return (
		<div className='w-full'>
			<AuthLinkButton hrefLink='#' text='create a new expense' />
			<TableWrapper>
				<table>
					<thead>
						<tr>
							<th className='pl-3'></th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								date
							</th>
							<th className='hidden lg:table-cell uppercase opacity-50 text-xs  text-left'>
								time
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								name
							</th>
							<th className='hidden lg:table-cell uppercase opacity-50 text-xs  text-left'>
								description
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								amount
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='pl-3'>
								{!state.show && (
									<ArrowRight
										className='cursor-pointer'
										onClick={(e) => handleToggle(e, 1)}
									/>
								)}
								{state.index == 1 && state.show && (
									<ArrowDownTab
										className='cursor-pointer'
										onClick={(e) => handleToggle(e, 1)}
									/>
								)}
							</td>
							<td>01 - 12 -2020</td>
							<td className='hidden lg:table-cell'>14:45</td>
							<td>Joshua Hungevu</td>
							<td className='hidden lg:table-cell'>
								Staff quarters maintenance{' '}
							</td>
							<td>₦ 30, 000</td>
							<td>
								<Link href='#'>
									<a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
										manage
									</a>
								</Link>
							</td>
						</tr>
						{state.index == 1 && state.show && (
							<tr>
								<td colSpan={7}>
									<div
										className='p-6 w-full lg:flex lg:justify-between'
										style={{ backgroundColor: '#F5F4F4' }}
									>
										<div className='w-full flex justify-between mb-6 lg:mb-0'>
											<div className='w-full'>
												<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
													amount
												</p>
												<h3 className='text-xl font-semibold opacity-75'>
													₦ 30,000{' '}
												</h3>
											</div>
											<div className='w-full'>
												<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
													department
												</p>
												<h3 className='text-xl font-semibold opacity-75'>
													₦ 30,000{' '}
												</h3>
											</div>
										</div>
										<div className='w-full lg:flex lg:justify-center lg:flex-col'>
											<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
												details
											</p>
											<p className='text-sm opacity-50'>
												Block work removal and
												renovation, Industrial Glasss
												for deep cleaning moton graphics
											</p>
										</div>
									</div>
								</td>
							</tr>
						)}
						<tr>
							<td className='pl-3'>
								{!state.show && (
									<ArrowRight
										className='cursor-pointer'
										onClick={(e) => handleToggle(e, 2)}
									/>
								)}
								{state.index == 2 && state.show && (
									<ArrowDownTab
										className='cursor-pointer'
										onClick={(e) => handleToggle(e, 2)}
									/>
								)}
							</td>
							<td>01 - 12 -2020</td>
							<td className='hidden lg:table-cell'>14:45</td>
							<td>Joshua Hungevu</td>
							<td className='hidden lg:table-cell'>
								Staff quarters maintenance{' '}
							</td>
							<td>₦ 30, 000</td>
							<td>
								<Link href='#'>
									<a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
										manage
									</a>
								</Link>
							</td>
						</tr>
						{state.index == 2 && state.show && (
							<tr>
								<td colSpan={7}>
									<div
										className='p-6 w-full lg:flex lg:justify-between'
										style={{ backgroundColor: '#F5F4F4' }}
									>
										<div className='w-full flex justify-between mb-6 lg:mb-0'>
											<div className='w-full'>
												<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
													amount
												</p>
												<h3 className='text-xl font-semibold opacity-75'>
													₦ 30,000{' '}
												</h3>
											</div>
											<div className='w-full'>
												<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
													department
												</p>
												<h3 className='text-xl font-semibold opacity-75'>
													₦ 30,000{' '}
												</h3>
											</div>
										</div>
										<div className='w-full lg:flex lg:justify-center lg:flex-col'>
											<p className='uppercase font-semibold opacity-50 text-xs mb-2'>
												details
											</p>
											<p className='text-sm opacity-50'>
												Block work removal and
												renovation, Industrial Glasss
												for deep cleaning moton graphics
											</p>
										</div>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</TableWrapper>
		</div>
	);
};

export default AccountTableSect;
