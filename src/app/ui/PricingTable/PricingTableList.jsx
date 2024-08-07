import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  const [tab, setTab] = useState("monthly");
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li
          className={tab === "monthly" ? "active" : ""}
          onClick={() => setTab("monthly")}
        >
          Monthly
        </li>
        <li
          className={tab === "yearly" ? "active" : ""}
          onClick={() => setTab("yearly")}
        >
          Yearly
        </li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Standard"
              price="10"
              currency="$"
              timeline="monthly"
              features={[
                "2 custom job",
                "Unlock all question",
                "Unlimited mock interviews",
                "Custom questions",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Standard"
              price="60"
              currency="$"
              timeline="yearly"
              features={[
                "2 custom job",
                "Unlock all question",
                "Unlimited mock interviews",
                "Custom questions",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
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
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Professional"
              price="100"
              currency="$"
              timeline="yearly"
              features={[
                "5 custom job",
                "Unlock all question",
                "Unlimited mock interviews",
                "Custom questions",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
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
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Ultimate"
              price="200"
              currency="$"
              timeline="yearly"
              features={[
                "20 custom job",
                "Unlock all question",
                "Unlimited mock interviews",
                "Custom questions",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
