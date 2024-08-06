import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../Button';
import Div from '../Div';

export default function PricingTable({
  title,
  price,
  currency,
  features,
  btnLink,
  btnText,
  timeline,
}) {
  return (
    <Div className="cs-pricing_table cs-style1">
      <h2 className="cs-pricing_title">{title}</h2>
      <Div className="cs-pricing_info">
        <Div className="cs-price">
          <h3 className="cs-white_color">
            {currency}
            {price}/
          </h3>
          <span className="cs-accent_color">{timeline}</span>
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
      <Div className="cs-pricing_btn_wrap">
        <Button btnLink={btnLink} btnText={btnText} />
      </Div>
    </Div>
  );
}
