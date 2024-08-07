"use client";
import Div from "@/app/ui/Div";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";

export default function PhotographyAgencyHome() {
  return (
    <>
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
    </>
  );
}
