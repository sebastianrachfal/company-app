import { ReactChild } from 'react';

const SubsectionHeader = ({ children }: { children: ReactChild }) => (
	<h2 className='mt-2 mb-1 text-sm text-gray-500'>{children}</h2>
);

export default SubsectionHeader;
