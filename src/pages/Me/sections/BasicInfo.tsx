import EditableLine from 'components/molecules/EditableLine';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from 'redux/slices/user';

export default function BasicInfo() {
	const { user } = useSelector(userSelector);
	return (
		<SectionWrapper>
			<div className='flex'>
				<div className='w-32'>
					<div className='flex flex-col items-center mx-3'>
						<img
							style={{ textIndent: '100%' }}
							src={user?.image}
							alt='profile'
							className='w-16 mt-1 mb-3 overflow-hidden rounded-full whitespace-nowrap'
						/>
						<Link to='/me'>
							<span className='text-sm text-blue-400'>
								See profile
							</span>
						</Link>
					</div>
				</div>
				<div className='flex justify-between w-full pl-4'>
					<div className='flex flex-col h-full'>
						<EditableLine.Span name='name' />
						<EditableLine.Span name='country' />
						<EditableLine.Span name='city' className='mt-auto' />
						<EditableLine.Span name='street' />
					</div>
					<div className='flex flex-col items-end justify-end ml-auto'>
						<EditableLine.Span name='email' />
						<EditableLine.Span name='phone' />
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
