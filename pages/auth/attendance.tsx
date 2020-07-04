import React, { CSSProperties } from 'react';
import AuthLayout from '../../components/AuthLayout';
import SearchInput from '../../components/SearchInput';
import PresentIcon from '../../public/utils/svg/PresentIcon';
import ButtonForm from '../../components/ButtonForm';

const Attendance = () => {
	return (
		<AuthLayout pageTitle='Attendance'>
			<div className='lg:flex lg:justify-between mb-6'>
				<h3 className='text-2xl font-semibold capitalize mb-6 w-full'>
					attendance tracker
				</h3>
				<div className='lg:flex lg:justify-between w-full'>
					<SearchInput placeholder="filter by employee name's" />
					<input
						type='date'
						className='w-full rounded-md h-8 px-3 border border-gray-300 text-sm'
					/>
				</div>
			</div>
			<form>
                <div style={styles.tableContainer} className='customScroll'>
					<table className='mb-6 w-full' style={styles.table}>
						<thead>
							<tr>
								<th className='uppercase opacity-50 text-xs  text-left pl-2 lg:pl-3'>
									personnel details
								</th>
								<th className='uppercase opacity-50 text-xs  text-left hidden lg:block'>
									department
								</th>
								<th className='uppercase opacity-50 text-xs  text-left'>
									action
								</th>
								<th className='uppercase opacity-50 text-xs  text-left'></th>
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance2'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance2'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance3'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance3'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance4'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance4'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance5'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance5'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance6'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance6'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
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
									Teaching
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance7'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Present
									</span>
								</td>
								<td>
									<input
										type='radio'
										className='mt-2'
										name='attendance7'
									/>
									<span
										className='inline-block ml-4 -translate-y-1'
										style={styles.spanTranslate}
									>
										Absent
									</span>
								</td>
								<td className='rounded-tr-lg rounded-br-lg'>
									<PresentIcon />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
                <div className="my-6 flex justify-center">
                    <ButtonForm text='submit attendance tracker' bgColor='#074279'/>
                </div>
			</form>
		</AuthLayout>
	);
};

const styles = {
	tableContainer: {
		height: '300px',
        overflowY: 'auto',
	} as CSSProperties,
	table: {
		borderCollapse: 'separate',
		borderSpacing: '0 7px',
	} as CSSProperties,
	spanTranslate: {
		transform: 'translateY(-3px)',
	} as CSSProperties,
};

export default Attendance;
