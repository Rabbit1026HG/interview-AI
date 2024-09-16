import React from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="10"
            currency="$"
            timeline="monthly"
            features={[
              "1 custom job",
              "Unlock all question",
              "Unlimited mock interviews",
              "Custom questions",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Professional"
            price="20"
            currency="$"
            timeline="monthly"
            features={[
              "5 custom job",
              "Unlock all question",
              "Unlimited mock interviews",
              "Custom questions",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Ultimate"
            price="50"
            currency="$"
            timeline="monthly"
            features={[
              "20 custom job",
              "Unlock all question",
              "Unlimited mock interviews",
              "Custom questions",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
