import BasicInfo from './sections/BasicInfo';
import ExtendedInfo from './sections/ExtendedInfo';
import PanelInfo from './sections/PanelInfo';
import Tables from './sections/Tables';

export default function Me() {
	return (
		<div className='w-full h-full bg-white rounded-lg shadow-md'>
			<BasicInfo />
			<ExtendedInfo />
			<PanelInfo />
			<Tables />
		</div>
	);
}
