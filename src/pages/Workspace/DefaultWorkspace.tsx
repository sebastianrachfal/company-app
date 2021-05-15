import LatestPublications from 'components/organisms/LatestPublications';
import Workspaces from 'components/organisms/Workspaces';
import useSWR from 'data/useSWR';

export default function DefaultWorkspace() {
	const { data: userData } = useSWR('/users');
	console.log(userData);
	return (
		<>
			<LatestPublications userData={userData} />
			<Workspaces />
		</>
	);
}
