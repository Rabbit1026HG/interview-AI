import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
const postData = [
  {
    url: '/blog/blog-details',
    src: '/images/post_1.jpeg',
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'How to keep fear from ruining your art business with confident',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_2.jpeg',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'Artistic mind will be great for creation anything',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_3.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'A.I will take over all job for human within next year',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_1.jpeg',
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'How to keep fear from ruining your art business with confident',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_2.jpeg',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'Artistic mind will be great for creation anything',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_3.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'A.I will take over all job for human within next year',
  },
];

export default function PostSlider() {
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
