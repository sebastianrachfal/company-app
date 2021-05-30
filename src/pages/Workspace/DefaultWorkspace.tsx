import LatestPublications from 'components/organisms/LatestPublications';
import ResumeYourWork from 'components/organisms/ResumeYourWork';
import Workspaces from 'components/organisms/Workspaces';

export default function DefaultWorkspace() {
	return (
		<>
			<LatestPublications />
			<Workspaces />
			<ResumeYourWork />
		</>
	);
}
