'use client'
import Hero6 from "@/app/ui/Hero/Hero6";

const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];

const showcaseData = [
  {
    title: 'Think reality <br/>do positive',
    imgUrl: '/images/slider_1.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Think reality <br/>do positive',
    imgUrl: '/images/slider_2.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Think reality <br/>do positive',
    imgUrl: '/images/slider_3.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Think reality <br/>do positive',
    imgUrl: '/images/slider_4.jpeg',
    href: '/case-study/case-study-details',
  },
];

export default function ShowcasePortfolioHome() {

  return (
    <Hero6
      heroSocialLinks={heroSocialLinks}
      socialLinksHeading="Follow Us"
      showcaseData={showcaseData}
    />
  );
}
