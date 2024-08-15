"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from "../../../../../public/images/case_study_img_1.jpeg";

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
export default function CaseStudyDetailsPage({ params: { jobid } }) {
  const [active, setActive] = useState("all");
  const [fileName, setFileName] = useState("No file chosen");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      fetchFiles();
    }, 1000);
  }, []);

  const fetchFiles = async () => {
    const resp = await fetch("/api/assistants/files", {
      method: "GET",
    });
    const data = await resp.json();
    console.log(data);

    setFiles(data);
  };
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
        <Spacing lg="50" md="35" />
        <Link href={`/question/${jobid}`} className="cs-text_btn">
          <span className="cs-font_30">Question Interviews</span>
        </Link>
      </Div>
      <Spacing lg="50" md="35" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <Link href="" className="cs-text_btn">
            <span className="cs-font_30">Mock Interviews</span>
          </Link>
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
      </Div>
      <Spacing lg="145" md="80" />
    </>
  );
}
