import React from 'react';
import Navbar from 'components/Navbar';
import Content from 'components/Content';

function App() {
	return (
		<main className='min-h-screen h-full z-[-1] overflow-y-hidden'>
			<Navbar />
			<Content />
		</main>
	);
}

export default App;
