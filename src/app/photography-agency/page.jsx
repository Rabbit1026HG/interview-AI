'use client';
import Div from '@/app/ui/Div';
import FunFact2 from '@/app/ui/FunFact/FunFact2';
import MasonryGallery from '@/app/ui/Gallery/MasonryGallery';
import Hero2 from '@/app/ui/Hero/Hero2';
import PricingTableList from '@/app/ui/PricingTable/PricingTableList';
import SectionHeading from '@/app/ui/SectionHeading';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import Spacing from '@/app/ui/Spacing';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import aboutImg from '../../../public/images/about_img_5.jpeg';
import Card from '../ui/Card';

const heroData = [
  {
    title: 'Wedding',
    imageUrl: '/images/wedding.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Fashion',
    imageUrl: '/images/fashion.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Commercial',
    imageUrl: '/images/commercial.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Landscape',
    imageUrl: '/images/landscape.jpeg',
    href: '/service/service-details',
  },
];
const funfaceData = [
  {
    title: 'Products',
    factNumber: '550',
  },
  {
    title: 'Global happy clients',
    factNumber: '40K',
  },
  {
    title: 'Project completed',
    factNumber: '50k',
  },
  {
    title: 'Team members',
    factNumber: '250',
  },
];

export default function PhotographyAgencyHome() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero2 data={heroData} phoneNumber="+044 546664" email="info@arino.com" />
      {/* End Hero Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src={aboutImg}
                alt="About"
                className="cs-w100 cs-radius_5"
                placeholder="blur"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-1">
            <SectionHeading
              title="We are UK based photography <br/>agency"
              subtitle="About Us"
              btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      {/* Start Services Section */}
      <Spacing lg="150" md="80" />
      <Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Services Section */}

      {/* Start Gallery Section */}
      <Spacing lg="145" md="80" />
      <MasonryGallery />
      {/* End Gallery Section */}

      {/* Start Pricing Section */}
      <Spacing lg="140" md="70" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Pricing Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      <Spacing lg="140" md="80" />
      {/* Start FunFact Section */}
      <Div className="container">
        <FunFact2 data={funfaceData} variant="cs-type2" />
      </Div>
      {/* End FunFact Section */}

      {/* Start Contact Section */}
      <Spacing lg="140" md="70" />
      <Div className="container">
        <SectionHeading
          title="Getting touch"
          subtitle="Contact Us"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <Div className="cs-gradient_bg_1">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Spacing lg="100" md="80" />
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
              <Spacing lg="100" md="60" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Div
                className="cs-google_map cs-type1 cs-bg"
                data-src="assets/img/map_img_1.jpeg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
                  allowFullScreen
                  title="Google Map"
                />
              </Div>
              <Spacing lg="0" md="80" />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* Start Contact Section */}
    </>
  );
}
