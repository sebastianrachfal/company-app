import MatterCard, { MatterCardType } from 'components/molecules/MatterCard';
import { useState } from 'react';

export default function StartWorking() {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<div className='box-content w-full p-4 my-6 -ml-4 border border-gray-300 rounded-md bg-[#F0F0F0]'>
			<div className='flex justify-between'>
				<h2 className='text-lg font-medium text-gray-400'>
					Start working on corporate matters
				</h2>
				<button
					onClick={() => setIsVisible(!isVisible)}
					className='font-medium text-gray-400 focus:outline-none'
				>
					{isVisible ? 'Hide' : <span>Show</span>}
				</button>
			</div>
			{isVisible && (
				<div className='flex flex-col mt-4 mb-2 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row'>
					<MatterCard type={MatterCardType.Entities} />
					<MatterCard type={MatterCardType.Ownership} />
					<MatterCard type={MatterCardType.Calendar} />
				</div>
			)}
		</div>
	);
}
