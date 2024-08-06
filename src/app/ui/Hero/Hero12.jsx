import React from 'react';
import Div from '../Div';
import FullScreenVerticalSlider2 from '../Slider/FullScreenVerticalSlider2';
import VerticalLinks from '../VerticalLinks';

export default function Hero12({
  socialLinksHeading,
  heroSocialLinks,
  showcaseData,
}) {
  return (
    <Div className="cs-hero_7_wrap">
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <FullScreenVerticalSlider2 data={showcaseData} />
    </Div>
  );
}
