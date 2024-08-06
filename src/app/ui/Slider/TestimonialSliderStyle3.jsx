import React from 'react';
import Div from '../Div';
import Slider from 'react-slick';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';
const testimonialData = [
  {
    avatarImgUrl: '/images/avatar_5.png',
    testimonialText:
      'I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the way businesses operate. They have set a new standard in the industry. Highly recommended!',
    avatarName: 'Leonel Bolian',
    avatarDesignation: 'Ninja Shop',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_6.png',
    testimonialText:
      'I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the way businesses operate. They have set a new standard in the industry. Highly recommended!',
    avatarName: 'Leonel Bolian',
    avatarDesignation: 'Ninja Shop',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_7.png',
    testimonialText:
      'I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the way businesses operate. They have set a new standard in the industry. Highly recommended!',
    avatarName: 'Leonel Bolian',
    avatarDesignation: 'Ninja Shop',
    ratings: '4',
  },
  {
    avatarImgUrl: '/images/avatar_5.png',
    testimonialText:
      'I am thrilled to share my experience with poze software. Their AI solutions have truly revolutionized the way businesses operate. They have set a new standard in the industry. Highly recommended!',
    avatarName: 'Leonel Bolian',
    avatarDesignation: 'Ninja Shop',
    ratings: '4',
  },
];

export default function TestimonialSliderStyle3() {
  /** Slider Settings **/
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-slider cs-gap-24">
      {testimonialData.map((item, index) => (
        <Div key={index}>
          <TestimonialStyle2 {...item} />
        </Div>
      ))}
    </Slider>
  );
}
