import React from 'react';
import SearchInput from './SearchInput';
import styled from 'styled-components';

const AccountSalarySect = () => {
	return (
		<div className='w-full'>
			<div className='w-full lg:flex lg:justify-between'>
				<h3 className='text-xl opacity-50 font-semibold mb-3 w-full lg:mr-64 lg:mb-0'>
					December Salary Payment Schedule
				</h3>
				<SearchInput
					placeholder="filter by employee name's"
					className='lg:w-6/12'
				/>
			</div>
			<TableWrapper>
				<table>
					<thead>
						<tr>
							<th className='pl-3 uppercase opacity-50 text-xs  text-left'>
								emp. id
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								name
							</th>
							<th className='hidden lg:table-cell uppercase opacity-50 text-xs  text-left'>
								department
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
							<td className='pl-3'>1001</td>
							<td>Joshua Hungevu</td>
							<td className='hidden lg:table-cell'>Teaching</td>
							<td>₦ 300, 000</td>
							<td>
                                <button className='focus:outline-none px-5 py-1 capitalize text-white font-semibold bg-btn-sec rounded-full'>
									pay
								</button>
							</td>
						</tr>
                        <tr>
                            <td className='pl-3'>1001</td>
                            <td>Joshua Hungevu</td>
                            <td className='hidden lg:table-cell'>Teaching</td>
                            <td>₦ 300, 000</td>
                            <td>
                                <button className='focus:outline-none px-5 py-1 capitalize text-white font-semibold bg-btn-sec rounded-full'>
                                    pay
								</button>
                            </td>
                        </tr>
					</tbody>
				</table>
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
		margin: 30px 0;

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

export default AccountSalarySect;
