import SubsectionHeader from 'components/atoms/SubsectionHeader';
import EditableLine from 'components/molecules/EditableLine';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { RiProfileLine, RiWechatLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices/user';
import { Link } from 'react-router-dom';
import { PanelHeader } from 'components/atoms/PanelHeader';

const InternalLine = ({
	src,
	name,
	ids,
}: {
	src: string;
	name: string;
	ids: number[];
}) => (
	<div className='flex items-center p-2 mt-1 bg-gray-200 rounded-md'>
		<img
			src={src}
			alt='profile'
			className='w-8 h-8 mr-2 overflow-hidden rounded-full'
		/>
		<EditableLine.Span {...{ name, ids }} />
		<div className='flex ml-auto space-x-4'>
			<Link to='/chat'>
				<div className='flex items-center space-x-1 cursor-pointer'>
					<RiWechatLine />
					<span>Message</span>
				</div>
			</Link>
			<Link to='/me'>
				<div className='flex items-center space-x-1 cursor-pointer'>
					<RiProfileLine />
					<span>Profile</span>
				</div>
			</Link>
		</div>
	</div>
);

export default function PanelInfo() {
	const { user } = useSelector(userSelector);

	return (
		<SectionWrapper>
			<div className='flex flex-col'>
				<PanelHeader>Panel informations</PanelHeader>

				<SubsectionHeader>Hourly fee</SubsectionHeader>
				<EditableLine.Span name='hourly' />

				<SubsectionHeader>Terms & conditions</SubsectionHeader>
				<EditableLine.Span name='terms' />

				<input
					type='file'
					className='p-2 my-3 text-sm bg-gray-200 rounded-md'
				/>

				<PanelHeader>Services & projects</PanelHeader>
				<EditableLine.Span name='services' />

				<PanelHeader>Internal correspondants</PanelHeader>
				<InternalLine
					name='correspondants'
					ids={[0]}
					src={user?.image}
				/>
				<InternalLine
					name='correspondants'
					ids={[1]}
					src={user?.image}
				/>
			</div>
		</SectionWrapper>
	);
}
