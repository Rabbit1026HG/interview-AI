import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Image from 'next/image';
import shape1Url from "../../../../public/images/hero_img_2.png"

export default function Hero10({
  title,
  subtitle,
  btnLink,
  btnText,
  shape2Url,
  shape3Url,
}) {
  return (
    <div className="cs-hero cs-style7" id="home">
      <div className="container">
        <h1 className="cs-hero_title">{parse(title)}</h1>
      </div>
      <div className="container">
        <div className="cs-hero_text_in">
          <div className="cs-hero_subtitle">{parse(subtitle)}</div>
          <div className="cs-hero_btn">
            <Button btnLink={btnLink} btnText={btnText} />
          </div>
        </div>
      </div>
      <div className="cs-hero_img_1">
        <Image src={shape1Url} alt="Hero Img" placeholder='blur' />
      </div>
      <div className="cs-hero_img_2">
        <img src={shape2Url} alt="Hero Img" />
      </div>
      <div className="cs-hero_img_3">
        <img src={shape3Url} alt="Hero Img" />
      </div>
    </div>
  );
}
