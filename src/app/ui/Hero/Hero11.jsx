import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import SocialWidget from '../Widget/SocialWidget';
import imgUrl from '../../../../public/images/hero_img_5.png'
import Image from 'next/image';

export default function Hero11({
  introTitle,
  title,
  subtitle,
  btnLink,
  btnText,
  experienceTitle,
  experienceNumber,
  projectTitle,
  projectNumber,
}) {
  return (
    <div className="cs-hero cs-style8 cs-shape_wrap_1" id="home">
      <div className="cs-shape_1" />
      <div className="container">
        <div className="cs-hero_img_box">
          <Image src={imgUrl} alt="Hero" placeholder='blur' />
          <div className="cs-hero_card cs-position_1">
            <h3 className="mb-0">{experienceNumber}</h3>
            <p className="mb-0">{experienceTitle}</p>
          </div>
          <div className="cs-hero_card cs-position_2">
            <h3 className="mb-0">{projectTitle}</h3>
            <p className="mb-0">{projectNumber}</p>
          </div>
        </div>
        <div className="cs-height_0 cs-height_lg_50" />
        <div className="cs-hero_text">
          <h2 className="cs-hero_intro_title">{parse(introTitle)}</h2>
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <div className="cs-hero_subtitle">{parse(subtitle)}</div>
          <SocialWidget />
          <div className="cs-hero_btn">
            <Button btnLink={btnLink} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}
