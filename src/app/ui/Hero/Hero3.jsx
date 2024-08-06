import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero3({
  title,
  socialLinksHeading,
  heroSocialLinks,
  btnLink,
  btnText,
  bgImageUrl,
}) {
  return (
    <Div className="cs-hero cs-style1 cs-type2" id="home">
      <div
        className="cs-hero_bg cs-bg cs-ripple_version cs-center"
        style={{backgroundImage: `url(${bgImageUrl})`}}>
          <Div className="container">
            <Div className="cs-hero_text text-center">
              <h1 className="cs-hero_title">{parse(title)}</h1>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
          </Div>
      </div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
}
