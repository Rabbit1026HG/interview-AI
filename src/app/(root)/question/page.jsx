"use client";
import { useState } from "react";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import Spacing from "@/app/ui/Spacing";

export default function PersonalPortfolioHome() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(6);
  return (
    <>
      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Web Development"
          subtitle="QUESTION"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList variant="cs-style2" />
      </Div>
      <Spacing lg="120" md="50" />
      {/* End Services Section */}
    </>
  );
}
