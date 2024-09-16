import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Div from "../Div";
import { useRouter } from "next/navigation";

export default function PricingTable({
  title,
  price,
  currency,
  features,
  btnText,
  timeline,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const item = {
    name: "Subscibe to interviewamigo",
    description: "per month",
    price: price,
    quantity: 1,
  };
  const router = useRouter();
  const createCheckOutSession = async () => {
    setIsLoading(true);
    const checkoutSession = await fetch("/api/create-stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const res = await checkoutSession.json();
    if (res.url) {
      router.push(res.url); // Redirect to the Stripe checkout page
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.error("Stripe URL not found in response:", res);
    }
  };
  return (
    <Div className="cs-pricing_table cs-style1">
      <h2 className="cs-pricing_title">{title}</h2>
      <Div className="cs-pricing_info">
        <Div className="cs-price">
          <h3 className="cs-white_color">
            {currency}
            {price}
          </h3>
          {/* <span className="cs-accent_color">{timeline}</span> */}
        </Div>
        <Div className="cs-price_text">Per subscriber per year</Div>
      </Div>
      <ul className="cs-pricing_feature cs-mp0">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="cs-feature_icon cs-accent_color">
              <Icon icon="bi:arrow-right-circle" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {isLoading ? (
        <Div className="cs-pricing_btn_wrap cs-text_btn">
          <span>Processing...</span>
          <Icon icon="eos-icons:bubble-loading" />
        </Div>
      ) : (
        <Div
          className="cs-pricing_btn_wrap cs-text_btn"
          onClick={createCheckOutSession}
        >
          <span>{btnText}</span>
          <Icon icon="bi:arrow-right" />
        </Div>
      )}
    </Div>
  );
}
