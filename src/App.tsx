import Navbar from 'components/organisms/Navbar';
import UserSideBar from 'components/organisms/UserSideBar';
import Workspace from 'pages/Workspace';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<main className='min-h-screen h-full z-[-1] overflow-y-hidden flex flex-col items-center'>
				<Navbar />
				<section className='max-w-[1200px] grid grid-cols-12 gap-6 pt-4 w-full'>
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
