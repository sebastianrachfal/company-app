import { useEffect } from 'react';
import Navbar from 'components/organisms/Navbar';
import UserSideBar from 'components/organisms/UserSideBar';
import Workspace from 'pages/Workspace';
import { useSelector } from 'react-redux';

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
			<main className='min-h-screen h-full z-[-1] flex flex-col items-center'>
				<Navbar />
				<section className='max-w-[1200px] grid grid-cols-12 gap-6 pt-4 w-full pb-20'>
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
