"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import HomeHeading from "../ui/PageHeading/HomeHeading";
import PricingTableList from "../ui/PricingTable/PricingTableList";
import { Icon } from "@iconify/react";
import ContactInfoWidget from "../ui/Widget/ContactInfoWidget";

// Hero Social Links
const heroSocialLinks = [
  {
    name: "Behance",
    links: "/",
  },
  {
    name: "Twitter",
    links: "/",
  },
];
// FunFact Data
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40K",
  },
  {
    title: "Project Completed",
    factNumber: "50K",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <HomeHeading
        title="Interviews are scary and unpredictable. InterviewAmigo is here to fix that."
        bgSrc="/images/hero_bg_4.jpeg"
        // bgSrc="/images/about_hero_bg.jpeg"
        subtitle="Interviews can be tough, but you don’t have to go through them alone. InterviewAmigo is here to help you practice, get personalized feedback, and build the confidence you need to succeed, whether it’s your first job or your next big career move."
      />
      {/* End Hero Section */}

      <Spacing lg="60" md="40" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cs-height_0 cs-height_lg_40" />
            <Div className={`cs-section_heading cs-style1`}>
              <h2 className="cs-section_title">Step 1.</h2>
              <h3 className="cs-section_subtitle">
                {`Upload your job description and resume, and let our AI create unlimited, personalized interview questions based on your experience and the role you want. It’s like having a coach who knows exactly what you need to practice.`}
              </h3>
            </Div>
          </div>
          <div className="col-lg-6">
            <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-lg-6">
            <Div className={`cs-section_heading cs-style1`}>
              <h2 className="cs-section_title">Step 2.</h2>
              <h3 className="cs-section_subtitle">
                {`Struggling with an answer? No worries, our AI can generate one based on your experience. Need to polish it? Just tell us how, and we’ll rewrite it for you.`}
              </h3>
            </Div>
          </div>
          <div className="col-lg-6">
            <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Div className={`cs-section_heading cs-style1`}>
              <h2 className="cs-section_title">Step 3.</h2>
              <h3 className="cs-section_subtitle">
                {`Get an interview experience with our AI-powered mock interviewer. Answer questions out loud while our AI records your responses, so you can see and hear exactly how you perform. Afterward, review the recording and receive detailed feedback to help you refine your answers and presentation.`}
              </h3>
            </Div>
          </div>
          <div className="col-lg-6">
            <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* End LogoList Section */}
      <Spacing lg="60" md="40" />

      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="85" md="40" />

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
        <Spacing lg="85" md="40" />
      </Div>
    </>
  );
}
