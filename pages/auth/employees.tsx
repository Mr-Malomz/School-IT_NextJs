import React, { CSSProperties } from 'react';
import AuthLayout from '../../components/AuthLayout';
import AuthLinkButton from '../../components/AuthLinkButton';
import Link from 'next/link';

const Employees = () => {
	return (
		<AuthLayout pageTitle='Employees'>
			<div className='flex justify-between mb-6'>
				<h3 className='text-2xl font-semibold capitalize'>employees</h3>
				<AuthLinkButton text='create employee' hrefLink='#' />
			</div>
			<table className='w-full mb-6' style={styles.table}>
				<thead>
					<tr>
						<th className='uppercase opacity-50 text-xs  text-left pl-2 lg:pl-3'>
							#
						</th>
						<th className='uppercase opacity-50 text-xs  text-left'>
							surname
						</th>
						<th className='uppercase opacity-50 text-xs  text-left'>
							firstname
						</th>
						<th className='uppercase opacity-50 text-xs  text-left'>
							Department
						</th>
						<th className='uppercase opacity-50 text-xs  text-left hidden lg:block'>
							created on
						</th>
						<th className='uppercase opacity-50 text-xs text-left'>
							action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-white h-10 text-xs'>
						<td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
							1
						</td>
						<td>Aderinsola</td>
						<td>Emmanuel</td>
						<td>Teaching</td>
						<td className='hidden lg:inline-flex lg:mt-3'>
							02 - 01 - 2020
						</td>
						<td className='rounded-tr-lg rounded-br-lg'>
							<Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
									manage
								</a>
							</Link>
						</td>
					</tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            2
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            3
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            4
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            5
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            6
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            8
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            9
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
                    <tr className='bg-white h-10 text-xs'>
                        <td className='rounded-tl-lg rounded-bl-lg pl-2 lg:pl-3'>
                            10
						</td>
                        <td>Aderinsola</td>
                        <td>Emmanuel</td>
                        <td>Teaching</td>
                        <td className='hidden lg:inline-flex lg:mt-3'>
                            02 - 01 - 2020
						</td>
                        <td className='rounded-tr-lg rounded-br-lg'>
                            <Link href='#'>
                                <a className='font-semibold text-btn-sec inline-block capitalize hover:text-blue-900'>
                                    manage
								</a>
                            </Link>
                        </td>
                    </tr>
				</tbody>
			</table>
		</AuthLayout>
	);
};

const styles = {
	table: {
		borderCollapse: 'separate',
		borderSpacing: '0 7px',
	} as CSSProperties,
};

export default Employees;
