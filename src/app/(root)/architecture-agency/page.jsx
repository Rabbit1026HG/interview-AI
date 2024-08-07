'use client';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import GalleryStyle2 from '@/app/ui/Gallery/GalleryStyle2';
import Hero9 from '@/app/ui/Hero/Hero9';
import IconBoxStyle2 from '@/app/ui/IconBox/IconBoxStyle2';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSliderStyle2 from '@/app/ui/Slider/TestimonialSliderStyle2';
import Spacing from '@/app/ui/Spacing';
import ContactInfoWidget from '@/app/ui/Widget/ContactInfoWidget';
import { Icon } from '@iconify/react';

const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40K',
  },
  {
    title: 'Project Completed',
    factNumber: '50K',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_45.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_46.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_47.jpeg',
  },
];

export default function ArchitectureAgencyHome() {
  return (
    <>
      <Hero9
        title="Arino Wheres Vision Meets Structure."
        subtitle="We deliver best problem solving solution for our client and provide finest <br /> finishing product in present and upcoming future."
        btnLink="/about"
        btnText="Load More"
        bgImageUrl="/images/hero_bg_6.jpeg"
        spiningCircleUrl="/images/hero_img_6.svg"
        videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
      />
      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_6.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_7.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_8.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
      {/* Start Service Section */}
      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <div className="cs-height_50 cs-height_lg_50" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="We provide best value offer"
                subtitle="Services"
                btnLink="/service"
                btnText="See All Services"
              />
              <Spacing lg="45" md="45" />
            </div>
            <div className="col-lg-7 offset-xl-1">
              <div className="cs-iconbox_4_wrap">
                <IconBoxStyle2
                  title="Interior Design"
                  subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totame."
                  iconUrl="/images/icons/service_icon_4.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="Urban Planning"
                  subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totame."
                  iconUrl="/images/icons/service_icon_5.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="Sustainable Design"
                  subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totame."
                  iconUrl="/images/icons/service_icon_6.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="3D Modeling"
                  subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totame."
                  iconUrl="/images/icons/service_icon_7.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_145 cs-height_lg_75" />
      </section>
      {/* End Service Section */}
      <section
        className="cs-bg"
        style={{ backgroundImage: 'url(/images/funfact_bg.jpeg)' }}
      >
        <div className="container">
          <FunFact
            variant="cs-type2"
            title="Our fun fact"
            subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            data={funfaceData}
          />
        </div>
      </section>
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}
      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}
      {/* Start Testimonial Section */}
      <TestimonialSliderStyle2 />
      {/* End Testimonial Section */}
      {/* Start Contact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Contact Section */}
      {/* Start MovingText Section */}
      <MovingText text="Our reputed world wide partners" variant="cs-type2" />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}
      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="130" md="70" />
      {/* End LogoList Section */}
      {/* Start Gallery Section */}
      <GalleryStyle2 />
      {/* End Gallery Section */}
    </>
  );
}
