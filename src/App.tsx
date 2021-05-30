import Navbar from 'components/organisms/Navbar';
import UserSideBar from 'components/organisms/UserSideBar';
import Workspace from 'pages/Workspace';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { fetchSiteData } from 'redux/slices/api-data';
import { useAppDispatch } from 'redux/store';

function App() {
	const dispatch = useAppDispatch();
	dispatch(fetchSiteData());
	return (
		<Router>
			<main className='min-h-screen z-[-1] flex flex-col items-center bg-gray-100'>
				<Navbar />
				<section className='max-w-[1280px] grid grid-cols-12 gap-10 pt-4 w-full h-full pb-20'>
					<UserSideBar />
					<article className='col-span-9'>
						<Switch>
							<Route exact path='/'>
								<Redirect to='/workspace' />
							</Route>
							<Route
								path='/workspace/:type?'
								component={Workspace}
							/>
						</Switch>
					</article>
				</section>
			</main>
		</Router>
	);
}

export default App;
