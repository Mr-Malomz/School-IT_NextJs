import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import InputFormField from '../../components/InputFormField';
import MenuClose from '../../public/utils/svg/MenuClose';
import Link from 'next/link';
import ButtonForm from '../../components/ButtonForm';
import styled from 'styled-components';

const Events = () => {
	return (
		<AuthLayout pageTitle='Events'>
			<h3 className='text-2xl font-semibold  mb-6'>Events</h3>
			<section className='w-full flex flex-col justify-center items-center mb-6'>
				<h4 className='text-xl opacity-50 font-semibold mb-6'>
					Create an Event
				</h4>
				<form
					className='p-6 bg-white rounded-lg mb-6'
					style={{ width: '398px' }}
				>
					<Link href='#'>
						<a>
							<MenuClose color='#000000' className='mb-8' />
						</a>
					</Link>
					<InputFormField
						labelText='event_date'
						name='event_date'
						type='date'
					/>
					<div className='w-full mb-6'>
						<label
							className='text-xs capitalize block mb-2 font-semibold'
							style={{ color: 'rgba(0, 0, 0, 0.4)' }}
						>
							details
						</label>
						<textarea
							className='appearance-none border border-gray-300 w-full rounded-md  pl-3'
							name='details'
							rows={4}
						/>
					</div>
					<ButtonForm
						text='create'
						bgColor='#074279'
						width='w-full'
					/>
				</form>
			</section>
			<TableWrapper>
				<table>
					<thead>
						<tr>
							<th className='pl-3 uppercase opacity-50 text-xs  text-left'>
								description
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								date
							</th>
							<th className='uppercase opacity-50 text-xs  text-left'>
								action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='pl-3'>General Staff Meeting</td>
							<td>23 - 01 - 2020</td>
							<td>
								<button className='font-semibold text-red-700 capitalize focus:outline-none'>
									delete
								</button>
							</td>
						</tr>
                        <tr>
                            <td className='pl-3'>General Staff Meeting</td>
                            <td>23 - 01 - 2020</td>
                            <td>
                                <button className='font-semibold text-red-700 capitalize focus:outline-none'>
                                    delete
								</button>
                            </td>
                        </tr>
					</tbody>
				</table>
			</TableWrapper>
		</AuthLayout>
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

export default Events;
