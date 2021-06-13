import {
	RiHome4Fill,
	RiUser3Fill,
	RiHonourFill,
	RiNewspaperFill,
	RiBuildingFill,
	RiFileList2Line,
	RiFilePaper2Fill,
	RiBuildingLine,
	RiFilePaper2Line,
	RiCommunityFill,
} from 'react-icons/ri';
import WItem from 'classes/WorkspaceItem';
import DDItem from 'classes/DropDownItem';
import UTItem from 'classes/UpdatesTagItem';

export const WORKSPACE_ITEMS = [
	new WItem(
		'Client contract',
		RiFilePaper2Fill,
		'https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
	),
	new WItem(
		'Supplier contract',
		RiFilePaper2Fill,
		'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
	),
	new WItem(
		'Corporate',
		RiBuildingFill,
		'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
	),
	new WItem(
		'Group norms',
		RiFileList2Line,
		'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
	),
	new WItem(
		'Real estate contracts',
		RiFilePaper2Fill,
		'https://images.unsplash.com/photo-1565402170291-8491f14678db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1304&q=80'
	),
];

export const USER_IMAGES = [
	'https://randomuser.me/api/portraits/women/10.jpg',
	'https://randomuser.me/api/portraits/men/10.jpg',
	'https://randomuser.me/api/portraits/women/7.jpg',
	'https://randomuser.me/api/portraits/women/11.jpg',
	'https://randomuser.me/api/portraits/women/12.jpg',
	'https://randomuser.me/api/portraits/women/4.jpg',
	'https://randomuser.me/api/portraits/men/10.jpg',
	'https://randomuser.me/api/portraits/men/20.jpg',
	'https://randomuser.me/api/portraits/women/17.jpg',
	'https://randomuser.me/api/portraits/women/2.jpg',
];

export const DROPDOWN_DATA = [
	{
		name: 'Platform',
		items: [
			new DDItem('Home', RiHome4Fill, '/workspace'),
			new DDItem('Publications', RiNewspaperFill, '/publications'),
			new DDItem('People', RiUser3Fill, '/people'),
			new DDItem('Entities', RiBuildingFill, '/entities'),
			new DDItem('Administration', RiHonourFill, '/administration'),
		],
		color: 'text-gray-800',
	},
	{
		name: 'Workspaces',
		items: [
			new DDItem(
				'Client contract',
				RiFilePaper2Fill,
				'/workspace/client-contract/'
			),
			new DDItem(
				'Supplier contract',
				RiFilePaper2Fill,
				'/workspace/supplier-contract/'
			),
			new DDItem('Corporate', RiBuildingFill, '/workspace/corporate/'),
			new DDItem(
				'Group norms',
				RiFileList2Line,
				'/workspace/group-norms/'
			),
			new DDItem(
				'Real estate contracts',
				RiFilePaper2Fill,
				'/workspace/real-estate-contracts/'
			),
		],
		color: 'text-gray-500',
	},
];

export const UPDATES_TAGS = [
	new UTItem('SAS', RiBuildingLine, 'bg-green-400'),
	new UTItem('SARL', RiBuildingLine, 'bg-blue-300'),
	new UTItem('Secondary business', RiBuildingLine, 'bg-yellow-400'),
	new UTItem('Communities', RiCommunityFill, 'bg-gray-300'),
	new UTItem('POA', RiFilePaper2Fill, 'bg-gray-200'),
	new UTItem('Survey', RiFilePaper2Line, 'bg-gray-200'),
];
