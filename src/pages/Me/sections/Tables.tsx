import { PanelHeader } from 'components/atoms/PanelHeader';
import DataTable from 'components/molecules/DataTable';
import SectionWrapper from 'components/molecules/SectionWrapper';
import { Link } from 'react-router-dom';

const TABLE_DATA = [
	[
		'Operation timeout',
		'Renault company',
		'France',
		'#Tax',
		'20/01/2018',
		'Racine',
	],
	[
		'Op. Prometheus',
		'Renault HQ',
		'USA',
		'#M&A',
		'18/02/2019',
		'Clifford chance',
	],
	[
		'Op. Latandre',
		'Renault Brawden',
		'Italia',
		'#Social',
		'18/02/2019',
		'SVZ',
	],
];

const FEES_DATA = [
	['2019', 'CS 153', '3 500€', 'Clifford chance'],
	['2018', 'CS 153', '9 500€', 'Linklaters'],
	['2017', 'CS 47', '10 500€', 'Linklaters'],
	['', 'CS 153', '18 500€', 'Linklaters'],
	['', 'CS 32', '15 500€', 'Linklaters'],
];

export default function Tables() {
	return (
		<SectionWrapper removeBorder>
			<div className='flex flex-col'>
				<PanelHeader>Proposals</PanelHeader>
				<DataTable
					name='proposals'
					headings={[
						'Name',
						'Entity',
						'Location',
						'Expertise',
						'Date',
						'Firm',
					]}
					data={TABLE_DATA}
				/>
				<Link to='/proposals' className='ml-auto'>
					<h3 className='my-2 ml-auto text-blue-600'>
						See more proposals
					</h3>
				</Link>

				<div className='w-full border-b border-gray-200'></div>

				<PanelHeader>Internal reviews</PanelHeader>
				<DataTable
					name='internal'
					headings={[
						'Name',
						'Entity',
						'Location',
						'Expertise',
						'Date',
						'',
					]}
					data={TABLE_DATA.map((item) => [...item.slice(0, 5), ''])}
				/>
				<Link to='/reviews' className='ml-auto'>
					<h3 className='my-2 ml-auto text-blue-600'>
						See more reviews
					</h3>
				</Link>

				<div className='w-full border-b border-gray-200'></div>

				<PanelHeader>Amount of fees</PanelHeader>
				<DataTable
					name='fees'
					headings={[
						'Year',
						'Cost center',
						'Total amount',
						'Law firm',
					]}
					data={FEES_DATA}
					auto
				/>
			</div>
		</SectionWrapper>
	);
}
