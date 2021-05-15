import { useParams } from 'react-router';
import IParams from './IParams';
import TypedWorkspace from './TypedWorkspace';
import DefaultWorkspace from './DefaultWorkspace';

export default function Workspace() {
	const { type } = useParams() as IParams;

	return type ? <TypedWorkspace type={type} /> : <DefaultWorkspace />;
}
