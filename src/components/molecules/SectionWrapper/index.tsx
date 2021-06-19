import cx from 'classnames';
import { ReactChild, createContext, useState } from 'react';
import { RiEditFill } from 'react-icons/ri';

export const EditableContext = createContext(false);

export default function SectionWrapper({
	children,
	removeBorder,
}: {
	children: ReactChild;
	removeBorder?: boolean;
}) {
	const [isEditable, setIsEditable] = useState(false);

	return (
		<div
			className={cx('p-5 relative pt-3', {
				'border-b border-gray-200': !removeBorder,
			})}
		>
			<button
				className='focus:outline-none absolute p-1.5 text-gray-500 transition duration-200 rounded-full cursor-pointer w-7 h-7 right-3 top-3 hover:bg-gray-100'
				onClick={() => setIsEditable(!isEditable)}
			>
				<RiEditFill className='w-full h-full' />
			</button>
			<EditableContext.Provider value={isEditable}>
				{children}
			</EditableContext.Provider>
		</div>
	);
}
