import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';

export default function Hero5({
  title,
  subtitle,
  btnLink,
  btnText,
  socialLinksHeading,
  heroSocialLinks,
}) {
  return (
    <Div
      className="cs-hero cs-style3 cs-bg cs-fixed_bg cs-shape_wrap_1"
      id="home"
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-circle_1" />
      <Div className="cs-circle_2" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title text-end">{parse(title)}</h1>
          <Div className="cs-hero_subtitle text-end">{subtitle}</Div>
          <Button btnLink={btnLink} btnText={btnText} />
        </Div>
      </Div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
}
