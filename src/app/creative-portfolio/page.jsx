'use client'
import CaseStudy from "@/app/ui/CaseStudy";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import Hero3 from "@/app/ui/Hero/Hero3";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";
import Portfolio2 from "@/app/ui/Portfolio/Portfolio2";
import Portfolio3 from "@/app/ui/Portfolio/Portfolio3";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";

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
const portfolioData = [
  {
    title: 'Winery eCommerce website design & development',
    subtitle: 'Project 01',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_35.jpeg',
    category: 'Web Development',
  },
  {
    title: 'Euro corporate agency for healthy environment',
    subtitle: 'Project 02',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_36.jpeg',
    category: 'Branding',
  },
  {
    title: 'Powerful admin dashboard design',
    subtitle: 'Project 03',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_37.jpeg',
    category: 'UI Design',
  },
  {
    title: 'Crypto financial trading apps for hedge fund',
    subtitle: 'Project 04',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_38.jpeg',
    category: 'Apps Design',
  },
];

export default function CreativePortfolioHome() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero3
        title="Arino Creative <br />Portfolio"
        btnLink="contact"
        btnText={`Let's talk`}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg_4.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )}
      {/* End Portfolio Section */}

      {/* Start Case Study Section */}
      <Spacing lg="45" md="10" />
      <Div className="container">
        <SectionHeading
          title="Featured case study"
          subtitle="Case Study"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <CaseStudy
        title="Analysis lead <br /> more efficiently"
        bgUrl="/images/case_study_2.jpeg"
        href="/case-study/case-study-details"
        variant="cs-style2"
      />
      <CaseStudy
        title="Ubar food app <br /> case study"
        bgUrl="/images/case_study_1.jpeg"
        href="/case-study/case-study-details"
      />
      <Spacing lg="150" md="80" />
      {/* End Case Study Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
