"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import HomeHeading from "../ui/PageHeading/HomeHeading";
import PricingTableList from "../ui/PricingTable/PricingTableList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Constact from "../ui/Contact";
import pricecheck from "../_services/pricecheck";
import SupabaseRepo from "../_services/supabase-repo";
import useSupabase from "@/hooks/SupabaseContext";

export default function Home() {
  const router = useRouter();
  const supabase = useSupabase();
  const supabaseapi = SupabaseRepo();
  async function priceinput() {
    if (!supabase) return;
    const { searchParams } = new URL(window.location.href);
    const status = searchParams.get("status");
    if (!status) return;
    router.push(`/`);
    const result = pricecheck(status);
    if (!result) return toast.error("Payment failed!", { theme: "dark" });
    const ischeck = await supabaseapi.doublecheck(status);
    if (ischeck) return toast.error("Payment failed!", { theme: "dark" });
    const updateresult = await supabaseapi.updatePrice(status, result);
    if (updateresult)
      return toast.success("Payment successful!", { theme: "dark" });
    else return toast.error("Payment failed?!", { theme: "dark" });
  }
  useEffect(() => {
    priceinput();
  }, [supabase]);
  return (
    <>
      {/* Start Hero Section */}
      <HomeHeading
        title="Interviews are scary and unpredictable. InterviewAmigo is here to fix that."
        bgSrc="/images/case_study_1.jpeg"
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
              <h2 className="cs-section_title">Step 1</h2>
              <br />
              <p className="cs-section_subtitle" style={{ textIndent: "15px" }}>
                {`Upload your job description and resume, and let our AI create unlimited, personalized interview questions based on your experience and the role you want. It’s like having a coach who knows exactly what you need to practice.`}
              </p>
            </Div>
          </div>
          <div className="col-lg-6">
            {/* <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-3.mp4" type="video/mp4" />
              </video>
            </div> */}
            <img src="/images/STEP 1.png" alt="STEP1" className="cs-w100" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-lg-6">
            <Div className={`cs-section_heading cs-style1`}>
              <h2 className="cs-section_title">Step 2</h2>
              <br />
              <p className="cs-section_subtitle" style={{ textIndent: "15px" }}>
                {`Struggling with an answer? No worries, our AI can generate one based on your experience. Need to polish it? Just tell us how, and we’ll rewrite it for you.`}
              </p>
            </Div>
          </div>
          <div className="col-lg-6">
            {/* <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-2.mp4" type="video/mp4" />
              </video>
            </div> */}
            <img src="/images/STEP 2.png" alt="STEP2" className="cs-w100" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Div className={`cs-section_heading cs-style1`}>
              <h2 className="cs-section_title">Step 3</h2>
              <br />
              <p className="cs-section_subtitle" style={{ textIndent: "15px" }}>
                {`Get an interview experience with our AI-powered mock interviewer. Answer questions out loud while our AI records your responses, so you can see and hear exactly how you perform. Afterward, review the recording and receive detailed feedback to help you refine your answers and presentation.`}
              </p>
            </Div>
          </div>
          <div className="col-lg-6">
            {/* <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src="/video/video-3.mp4" type="video/mp4" />
              </video>
            </div> */}
            <img src="/images/STEP 3.png" alt="STEP2" className="cs-w100" />
          </div>
        </div>
      </div>

      {/* End LogoList Section */}
      <Spacing lg="60" md="40" />

      <Div className="container" id="price">
        <SectionHeading title="" subtitle="Pricing & Packaging" />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="85" md="40" />
      <Constact />
    </>
  );
}
