import React from "react";
import Link from "next/link";
import Div from "../Div";

export default function HomeHeading({ title, bgSrc, subtitle }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase d-md-block d-none">
            <p>{subtitle}</p>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
