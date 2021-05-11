import UserSideBar from 'components/UserSideBar';

export default function Content() {
	return (
		<section className='flex h-full'>
			<UserSideBar />
			<article></article>
		</section>
	);
}
