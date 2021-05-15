import WorkspaceCard from 'components/molecules/WorkspaceCard';
import {
	RiBuildingFill,
	RiFileList2Line,
	RiFilePaper2Fill,
} from 'react-icons/ri';
import WItem from 'classes/WorkspaceItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Pagination, Mousewheel } from 'swiper/core';
SwiperCore.use([Pagination, Mousewheel]);

const WORKSPACE_ITEMS = [
	new WItem('Client contract', RiFilePaper2Fill, ''),
	new WItem('Supplier contract', RiFilePaper2Fill, ''),
	new WItem('Corporate', RiBuildingFill, ''),
	new WItem('Group norms', RiFileList2Line, ''),
	new WItem('Real estate contracts', RiFilePaper2Fill, ''),
];

export default function Workspaces() {
	return (
		<div>
			<h4 className='my-4 text-xl font-semibold'>Workspaces</h4>
			<Swiper
				slidesPerView={3}
				direction={'horizontal'}
				loop={true}
				spaceBetween={30}
				freeMode={true}
				mousewheel={true}
				className='flex-1'
			>
				{WORKSPACE_ITEMS.map((item) => (
					<SwiperSlide key={`card-${item.name}`}>
						<WorkspaceCard item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
