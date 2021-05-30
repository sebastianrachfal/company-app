import { useParams } from 'react-router';
import IWorkspaceParams from './IWorkspaceParams';
import TypedWorkspace from './TypedWorkspace';
import DefaultWorkspace from './DefaultWorkspace';

export default function Workspace() {
	const { type } = useParams() as IWorkspaceParams;

	return type ? <TypedWorkspace type={type} /> : <DefaultWorkspace />;
}
