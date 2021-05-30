import WorkspaceItem from 'classes/WorkspaceItem';

export default function WorkspaceInfo({ name, Icon, imgSrc }: WorkspaceItem) {
	return (
		<div className='flex items-center text-sm whitespace-nowrap'>
			<Icon className='inline-block mr-1' /> {name}
		</div>
	);
}
