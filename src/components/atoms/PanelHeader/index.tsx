import { ReactChild } from 'react';

export const PanelHeader = ({ children }: { children: ReactChild }) => (
	<h2 className='mt-3 mb-1 font-semibold text-gray-900'>{children}</h2>
);
