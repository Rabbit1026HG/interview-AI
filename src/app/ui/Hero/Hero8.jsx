import React from 'react';
import Link from "next/link";;
import VerticalLinks from '../VerticalLinks';
import parse from 'html-react-parser';

export default function Hero8({
  title,
  subtitle,
  btnLink,
  btnText,
  bgImageUrl,
  socialLinksHeading,
  heroSocialLinks,
  bannerHighlightText,
  spiningCircleUrl,
}) {
  return (
    <div
      className="cs-hero cs-style3 cs-type1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      id="home"
    >
      <div className="container">
        <div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <div className="cs-hero_subtitle">{parse(subtitle)}</div>
          <Link href={btnLink} className="cs-btn cs-style1 cs-type1">
            <span>{btnText}</span>
            <svg
              width={26}
              height={12}
              viewBox="0 0 26 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="cs-hero_highlite cs-primary_color cs-accent_color cs-center">
        {bannerHighlightText}
        <div className="cs-round_img cs-center">
          <img src={spiningCircleUrl} alt="Circle" />
        </div>
      </div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </div>
  );
}
