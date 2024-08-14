'use client'
import Hero12 from "@/app/ui/Hero/Hero12";


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
    introTitle: 'Video Direction (Jan, 2023)',
    title: 'Nature video short',
    videoUrl: '/video/video-3.mp4',
    href: '/case-study/case-study-details',
  },
  {
    introTitle: 'Video Direction (Sep, 2023)',
    title: 'TV commercial ad',
    videoUrl: '/video/video-1.mp4',
    href: '/case-study/case-study-details',
  },
  {
    introTitle: 'Video Direction (Mar, 2023)',
    title: '3D world comes',
    videoUrl: '/video/video-2.mp4',
    href: '/case-study/case-study-details',
  },
];

export default function VideoShowcaseHome() {
  return (
    <>
      <Hero12
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
    </>
  );
}
