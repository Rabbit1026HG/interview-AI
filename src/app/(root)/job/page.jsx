"use client";

import SectionHeading from "@/app/ui/SectionHeading";
import ServiceListStyle2 from "@/app/ui/ServiceList/ServiceListStyle2";
import Spacing from "@/app/ui/Spacing";

export default function FreelancerAgencyHome() {
  return (
    <>
      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <Spacing lg="145" md="80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <SectionHeading title="Custom Job Interviews" subtitle="Jobs" />
              <Spacing lg="45" md="45" />
            </div>
            <div className="col-lg-7 offset-xl-1">
              <ServiceListStyle2 />
            </div>
          </div>
        </div>
      </section>

      <Spacing lg="145" md="80" />
    </>
  );
}
