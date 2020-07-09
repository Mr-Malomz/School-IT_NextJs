import React from 'react';
import AuthLinkButton from './AuthLinkButton';
import styled from 'styled-components';
import ArrowRight from '../public/utils/svg/ArrowRight';
import ArrowDownTab from '../public/utils/svg/ArrowDownTab';
import Link from 'next/link';

const AccountTableSect = () => {
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
								<ArrowRight className='cursor-pointer' />
								{/* <ArrowDownTab className='cursor-pointer' /> */}
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
					</tbody>
				</table>
				<div
					className='p-6 w-full'
					style={{ backgroundColor: '#F5F4F4' }}
				>
                    
                </div>
			</TableWrapper>
		</div>
	);
};

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

export default AccountTableSect;
