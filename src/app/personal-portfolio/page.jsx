'use client'
import { useEffect, useState } from "react";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import Hero11 from "@/app/ui/Hero/Hero11";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import TestimonialSliderStyle4 from "@/app/ui/Slider/TestimonialSliderStyle4";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";


// import TestimonialSliderStyle4 from '../Slider/TestimonialSliderStyle4';
const funfaceData = [
  {
    title: 'HTML5',
    factNumber: '90%',
  },
  {
    title: 'CSS3',
    factNumber: '95%',
  },
  {
    title: 'JavaScript',
    factNumber: '92%',
  },
  {
    title: 'UI/UX Design',
    factNumber: '85%',
  },
  {
    title: 'React.js',
    factNumber: '85%',
  },
  {
    title: 'Mysql Database',
    factNumber: '70%',
  },
];
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_39.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_40.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_41.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_42.jpeg',
    category: 'mobile_apps',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_43.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_44.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_10.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_5.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_6.jpeg',
    category: 'web_design',
  },
];
const categoryMenu = [
  {
    title: 'Web Design',
    category: 'web_design',
  },
  {
    title: 'UI/UX Design',
    category: 'ui_ux_design',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },
  {
    title: 'Logo Design',
    category: 'logo_design',
  },
];
const educationData = [
  {
    title: 'Bachelor In Web Technology',
    subTitle: 'University Of Florida | 2008-20012',
  },
  {
    title: 'Masters In Graphic Design',
    subTitle: 'University Of Coventry | 2013-2015',
  },
  {
    title: 'Diploma In Motion Graphic',
    subTitle: 'University Of Florida | 2018-20020',
  },
];
const experienceData = [
  {
    title: 'Senior Graphic Designer',
    subTitle: 'Web Tech | 2022-2024',
  },
  {
    title: 'Project Manager',
    subTitle: 'Awesome Themez | 2020-2022',
  },
  {
    title: 'Word Press Developer',
    subTitle: 'Mount Soft IT | 2018-2020',
  },
];

export default function PersonalPortfolioHome() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(6);
  return (
    <>
      <Hero11
        introTitle="Hello, I am 👋"
        title="Mila Decosta"
        subtitle="Hailing from London, UK, I come with a wealth of web & app UI/UX design expertise. I'm eager to engage in a conversation with you about our distinctive offerings and passions."
        btnLink="/portfolio"
        btnText="See Portfolio"
        experienceTitle="years experience in web design"
        experienceNumber="07+"
        projectTitle="250+"
        projectNumber="Project completed"
      />
      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList variant="cs-style2" />
      </Div>
      <Spacing lg="120" md="50" />
      {/* End Services Section */}
      {/* End Service Section */}
      <section
        className="cs-bg"
        style={{ backgroundImage: 'url(/images/funfact_bg.jpeg)' }}
      >
        <div className="container">
          <FunFact
            variant="cs-type2"
            title="My tech skills"
            subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            data={funfaceData}
          />
        </div>
      </section>
      {/* Start Portfolio Section */}
      <Spacing lg="115" md="55" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="cs_portfolio_grid_2">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Portfolio Section */}
      {/* Start Resume Section */}
      <section
        className="cs-fixed_bg"
        style={{ backgroundImage: `url(/images/resume_bg.jpeg)` }}
      >
        <div className="cs-height_145 cs-height_lg_75" />
        <div className="container">
          <SectionHeading
            title="Education & experience"
            subtitle="Resume"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <div className="cs-list_2_group">
            <ul className="cs-list cs-style_2 cs-mp0">
              {educationData.map((item, index) => (
                <li key={index}>
                  <svg
                    width={25}
                    height={19}
                    viewBox="0 0 25 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cs-accent_color"
                  >
                    <g clipPath="url(#clip0_1848_11192)">
                      <path
                        d="M0 6.13134C0.169315 5.45889 0.625163 5.0963 1.2373 4.81281C4.43475 3.35584 7.62568 1.8725 10.8166 0.395744C11.9302 -0.118483 13.0503 -0.131668 14.1638 0.382558C17.446 1.89887 20.7281 3.41517 24.0036 4.93148C24.6353 5.22156 24.9935 5.70282 25 6.40823C25 7.11365 24.6418 7.6015 24.0167 7.89158C20.7281 9.41448 17.4394 10.9374 14.1508 12.4537C13.0373 12.9679 11.9172 12.9481 10.8036 12.4273C7.59312 10.9374 4.38265 9.44085 1.15916 7.97069C0.566554 7.70039 0.156291 7.31802 0 6.67853C0 6.49394 0 6.31594 0 6.13134Z"
                        fill="currentColor"
                      />
                      <path
                        d="M4.70088 11.3525C4.86368 11.4251 5.00044 11.4844 5.13719 11.5437C6.77824 12.3019 8.4193 13.0534 10.0603 13.8248C11.6949 14.5961 13.3229 14.5895 14.9575 13.8248C16.6767 13.0139 18.4024 12.2294 20.1216 11.4317C20.1737 11.4053 20.2258 11.3921 20.3039 11.3591C20.3104 11.4448 20.3234 11.5174 20.3234 11.5833C20.3234 12.6315 20.3365 13.6732 20.3234 14.7214C20.3039 16.0992 19.6787 17.1211 18.4414 17.6749C14.4951 19.4483 10.5227 19.4417 6.57637 17.6683C5.34558 17.1211 4.72693 16.0992 4.70088 14.7346C4.68785 13.6863 4.70088 12.6447 4.70088 11.5965C4.68785 11.5239 4.69437 11.4514 4.70088 11.3525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.4438 9.88916C23.4438 10.3045 23.4438 10.6869 23.4438 11.0627C23.4438 12.3812 23.4438 13.6931 23.4438 15.0116C23.4438 15.4336 23.1507 15.7632 22.76 15.8159C22.3823 15.8621 22.0111 15.6116 21.9134 15.2292C21.8874 15.1369 21.8874 15.0314 21.8874 14.9391C21.8874 13.5744 21.8874 12.2098 21.8809 10.8385C21.8809 10.6737 21.9199 10.5946 22.0762 10.5286C22.519 10.3309 22.9554 10.1199 23.4438 9.88916Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1848_11192">
                        <rect width={25} height={19} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.subTitle}</p>
                </li>
              ))}
            </ul>
            <ul className="cs-list cs-style_2 cs-mp0">
              {experienceData.map((item, index) => (
                <li key={index}>
                  <svg
                    width={22}
                    height={19}
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cs-accent_color"
                  >
                    <g clipPath="url(#clip0_1848_1169)">
                      <path
                        d="M0 16.7139C0 14.1904 0 11.667 0 9.14355C0.0229107 9.14949 0.0400937 9.14949 0.0630044 9.15543C3.45952 10.3311 6.85603 11.5007 10.2525 12.6764C10.7451 12.8486 11.2262 12.8545 11.7246 12.6882C15.0695 11.5304 18.4202 10.3786 21.7709 9.22074C21.8396 9.19699 21.9141 9.17324 21.9885 9.14949C21.9943 9.19699 22 9.22074 22 9.24449C22 11.6551 22.0057 14.0657 21.9885 16.4764C21.9885 16.8089 21.9026 17.1592 21.7652 17.462C21.284 18.5129 20.4593 18.9998 19.3366 18.9998C13.7865 18.9939 8.24212 18.9998 2.69201 18.9998C2.59464 18.9998 2.49154 18.9998 2.39417 18.9939C1.33455 18.9523 0.378027 18.1626 0.0973705 17.0998C0.0630044 16.9692 0.034366 16.8386 0 16.7139Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0 5.13606C0.0400937 4.98762 0.0687321 4.83324 0.114554 4.68481C0.446759 3.58043 1.39755 2.85606 2.53736 2.85012C4.03801 2.84418 5.54439 2.85012 7.04504 2.85012C7.13096 2.85012 7.21114 2.85012 7.33142 2.85012C7.33142 2.50574 7.3257 2.17918 7.33142 1.85856C7.35433 0.956057 7.93856 0.231682 8.79198 0.0416819C8.91799 0.0119944 9.04973 0.00605686 9.17574 0.00605686C10.3843 0.00605686 11.5985 0.000119357 12.8071 0.00605686C13.7235 0.0119944 14.4337 0.617619 14.617 1.52606C14.6514 1.68637 14.6514 1.85262 14.6514 2.01293C14.6571 2.28012 14.6514 2.54731 14.6514 2.85012C14.7488 2.85012 14.829 2.85012 14.9149 2.85012C16.3983 2.85012 17.8761 2.85012 19.3595 2.85012C20.9117 2.85012 21.9885 3.96637 21.9885 5.58137C21.9885 6.19887 21.9828 6.81637 21.9943 7.42793C21.9943 7.57637 21.9599 7.64762 21.8167 7.69512C18.3114 8.90043 14.806 10.1176 11.295 11.317C11.1174 11.3764 10.8883 11.3823 10.7165 11.3229C7.16532 10.1117 3.60844 8.88262 0.0572768 7.65949C0.0343661 7.65356 0.017183 7.64168 0 7.62981C0 6.79856 0 5.96731 0 5.13606ZM9.17001 2.83824C10.4015 2.83824 11.6043 2.83824 12.8185 2.83824C12.8185 2.52356 12.8185 2.22074 12.8185 1.91793C11.5928 1.91793 10.3843 1.91793 9.17001 1.91793C9.17001 2.23262 9.17001 2.52356 9.17001 2.83824Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1848_1169">
                        <rect width={22} height={19} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.subTitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
      </section>
      {/* End Resume Section */}
      {/* Start Testimonial Section */}
      <section>
        <div className="cs-height_145 cs-height_lg_75" />
        <div className="container">
          <SectionHeading
            title="What clients say <br>about my skill"
            subtitle="Testimonial"
          />
          <div className="cs-height_90 cs-height_lg_45" />
          <TestimonialSliderStyle4 />
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
      </section>
      {/* End Testimonial Section */}
      {/* Start CTA Section */}
      <Cta
        title="Let’s disscuse make <br />something <i>cool</i> together"
        btnText="Apply For Meeting"
        btnLink="/contact"
        bgSrc="/images/cta_bg_5.jpeg"
        variant="cs-type_1"
      />
      {/* End CTA Section */}
    </>
  );
}
