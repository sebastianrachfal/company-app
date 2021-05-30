import WorkspaceCard from 'components/molecules/WorkspaceCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Pagination, Mousewheel } from 'swiper/core';
import { WORKSPACE_ITEMS } from 'constants/index';

SwiperCore.use([Pagination, Mousewheel]);

export default function Workspaces() {
	return (
		<div>
			<h4 className='my-4 text-xl font-semibold'>Workspaces</h4>
			<Swiper
				slidesPerView={3}
				direction={'horizontal'}
				spaceBetween={10}
				freeMode={true}
				mousewheel={true}
				className='flex-1'
			>
				{WORKSPACE_ITEMS.map((item) => (
					<SwiperSlide key={`card-${item.name}`} className='py-2'>
						<WorkspaceCard item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
