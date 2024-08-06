'use client'
import Hero7 from "@/app/ui/Hero/Hero7";

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
    title: 'Uber food app <br />case study',
    imgUrl: '/images/slider_5.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    imgUrl: '/images/slider_6.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    imgUrl: '/images/slider_7.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    imgUrl: '/images/slider_8.jpeg',
    href: '/case-study/case-study-details',
  },
  {
    title: 'Uber food app <br />case study',
    imgUrl: '/images/slider_9.jpeg',
    href: '/case-study/case-study-details',
  },
];

export default function CaseStudyShowcaseHome() {

  return (
    <>
      <Hero7
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
    </>
  );
}
