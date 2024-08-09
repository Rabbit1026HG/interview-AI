"use client";

import Link from "next/link";
import { useState } from "react";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from "../../../../../public/images/case_study_img_1.jpeg";
import Portfolio from "@/app/ui/Portfolio";
import { Icon } from "@iconify/react";

const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_39.jpeg",
    category: "completedn",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_40.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_41.jpeg",
    category: "Ready",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_42.jpeg",
    category: "mobile_apps",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_43.jpeg",
    category: "completedn",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_44.jpeg",
    category: "Ready",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_10.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_4.jpeg",
    category: "completedn",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_5.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_6.jpeg",
    category: "Ready",
  },
];
const categoryMenu = [
  {
    title: "Ready",
    category: "Ready",
  },
  {
    title: "Completed",
    category: "completedn",
  },
];
export default function CaseStudyDetailsPage() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(6);
  const [fileName, setFileName] = useState("No file chosen");
  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Web development"
          subtitle="CUSTOM JOB"
          variant="cs-style1 text-center"
        />
        <hr />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Thumb"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />
        <Spacing lg="100" md="50" />
        <section>
          <div className="col-sm-12">
            <label className="cs-btn cs-style1" htmlFor="choose">
              Upload File
            </label>
            <input
              type="file"
              hidden
              id="choose"
              accept=".pdf, .doc, .docx, .md, .txt"
              onChange={(e) => {
                e.target.value
                  ? setFileName(e.target?.files[0].name)
                  : setFileName("No file chosen");
              }}
            />
            <p>{fileName}</p>
          </div>
        </section>
        <Link href="/question" className="cs-text_btn">
          <span className="cs-font_30">Question Interviews</span>
        </Link>
      </Div>
      {/* Start Portfolio Section */}
      {/* <Spacing lg="115" md="55" /> */}
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Mock Interviews" subtitle="" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        {/* <Div className="cs_portfolio_grid_2">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
            </Div>
          ))}
        </Div> */}

        {/* <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div> */}
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Portfolio Section */}
      <Spacing lg="125" md="55" />
    </>
  );
}
