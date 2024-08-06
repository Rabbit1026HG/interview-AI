import React from 'react';
import Div from '../Div';
import FullScreenVerticalSlider from '../Slider/FullScreenVerticalSlider';
import VerticalLinks from '../VerticalLinks';

export default function Hero7({
  socialLinksHeading,
  heroSocialLinks,
  showcaseData,
}) {
  return (
    <Div className="cs-hero_7_wrap">
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <FullScreenVerticalSlider data={showcaseData} />
    </Div>
  );
}
