import WorkspaceCard from 'components/molecules/WorkspaceCard';
import { WORKSPACE_ITEMS } from 'constants/index';
import IWorkspaceParams from './IWorkspaceParams';
import WItem from 'classes/WorkspaceItem';
import StartWorking from 'components/organisms/StartWorking';
import LatestUpdates from 'components/organisms/LatestUpdates';

export default function TypedWorkspace({ type }: IWorkspaceParams) {
	const selectedWorkspace = WORKSPACE_ITEMS.find(
		({ name }: WItem) =>
			name
				.split(' ')
				.map((e: string) => e.toLowerCase())
				.join('-') === type
	);

	if (!selectedWorkspace) return null;

	return (
		<div className='flex flex-col w-full'>
			<WorkspaceCard item={selectedWorkspace} onWorkspace />
			<StartWorking />
			<LatestUpdates />
		</div>
	);
}
