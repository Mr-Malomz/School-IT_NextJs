import React, { CSSProperties } from 'react';
import AuthLayout from '../../components/AuthLayout';
import ExpensesIcon from '../../public/utils/svg/ExpensesIcon';

const Account = () => {
	return (
		<AuthLayout pageTitle='Account'>
			<h3 className='text-2xl font-semibold capitalize mb-6'>account</h3>
			<div className='w-full flex justify-between'>
				<div
					className=' w-56 p-6 rounded-lg flex justify-between items-center'
					style={styles.bgContainer}
				>
					<div className=''>
						<div className='flex items-center'>
							<ExpensesIcon className='mr-4' />
							<p className='capitalize text-white font-semibold'>
								expense
							</p>
						</div>
						<div className='mt-4'>
							<p className='capitalize text-white font-semibold'>
								december
							</p>
							<h3 className='text-2xl text-white font-semibold'>
								₦ 300,000{' '}
							</h3>
						</div>
					</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" className='lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 8.414V18H13V8.414L17.293 12.707L18.707 11.293L12 4.586L5.29297 11.293L6.70697 12.707L11 8.414Z" fill="white" />
                    </svg>
                    <div className="hidden border border-white rounded-full w-24 px-2 lg:flex justify-between items-center">
                        <h4 className='uppercase text-white text-xs font-semibold'>high</h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" className='' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8.414V18H13V8.414L17.293 12.707L18.707 11.293L12 4.586L5.29297 11.293L6.70697 12.707L11 8.414Z" fill="white" />
                        </svg>
                    </div>
				</div>
				<div
					className='flex justify-between w-56'
					style={styles.bgContainer}
				>
					<div className='flex'>
						<ExpensesIcon />
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

const styles = {
	bgContainer: {
		background:
			'linear-gradient(192.52deg, #AF2233 -22.31%, #000000 -15.88%, #2D4053 10.76%, #000000 45.95%, #5169BF 87.21%)',
	} as CSSProperties,
};

export default Account;
