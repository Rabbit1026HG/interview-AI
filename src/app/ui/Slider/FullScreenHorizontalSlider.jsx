'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser';
import Div from '../Div';
import Link from 'next/link';

export default function FullScreenHorizontalSlider({ data }) {
  return (
    <Div className="cs-swiper_arrow_style_1">
      <Div className="swiper-button image-swiper-button-next">
        Next <Icon icon="bi:arrow-right" />
      </Div>
      <Div className="swiper-button image-swiper-button-prev">
        <Icon icon="bi:arrow-left" /> Prev
      </Div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        loop={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Div
              className="cs-hero cs-style4 cs-bg"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <Link href={item.href} className="cs-hero_link" />
              <Div className="cs-hero_text">
                <h2 className="cs-hero_title">{parse(item.title)}</h2>
              </Div>
            </Div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
}
