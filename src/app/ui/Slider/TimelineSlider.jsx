import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';
const timelineData = [
  [
    {
      year: '2019',
      name: 'Google awards',
      position: 'Website of the day',
      type: 'Mobile exelence',
    },
    {
      year: '2021',
      name: 'CSS awards design',
      position: 'Honorable mention',
      type: 'Desktop exelence',
    },
  ],
  [
    {
      year: '2020',
      name: 'New technology innovation',
      position: 'Honorable mention',
      type: 'Desktop exelence',
    },
    {
      year: '2022',
      name: 'UI/UX design of the month',
      position: 'Website of the day',
      type: 'Mobile exelence',
    },
  ],
  [
    {
      year: '2019',
      name: 'Google awards',
      position: 'Website of the day',
      type: 'Mobile exelence',
    },
    {
      year: '2021',
      name: 'CSS awards design',
      position: 'Honorable mention',
      type: 'Desktop exelence',
    },
  ],
];

export default function TimelineSlider() {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
