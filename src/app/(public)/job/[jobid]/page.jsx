"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import { useAtom } from "jotai";
import { titlejotai } from "@/store";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceMork from "@/app/ui/ServiceList/ServiceMork";

const categoryMenu = [
  {
    title: "Ready",
    category: "Ready",
  },
  {
    title: "Completed",
    category: "Completed",
  },
];
const data = [
  {
    id: 1,
    question: "Completed   2024-09-08",
    category: "Completed",
  },
  {
    id: 2,
    question: "Ready",
    category: "Ready",
  },
  {
    id: 3,
    question: "Ready",
    category: "Ready",
  },
  {
    id: 4,
    question: "Ready",
    category: "Ready",
  },
  {
    id: 5,
    question: "Ready",
    category: "Ready",
  },
  {
    id: 6,
    question: "Ready",
    category: "Ready",
  },
  {
    id: 7,
    question: "Ready",
    category: "Ready",
  },
];
export default function CaseStudyDetailsPage({ params: { jobid } }) {
  const [active, setActive] = useState("all");
  const [fileName, setFileName] = useState("No file chosen");
  const [title, setTitle] = useAtom(titlejotai);
  const supabase = useSupabase();
  const getTitle = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select("title")
      .eq("id", jobid);
    if (error) {
      console.log(error.message);
      return;
    }
    setTitle(data[0].title);
  };
  useEffect(() => {
    if (!title) getTitle();
  }, [supabase]);
  // const [files, setFiles] = useState([]);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     fetchFiles();
  //   }, 1000);
  // }, []);

  // const fetchFiles = async () => {
  //   const resp = await fetch("/api/assistants/files", {
  //     method: "GET",
  //   });
  //   const data = await resp.json();
  //   console.log(data);

  //   setFiles(data);
  // };
  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container ">
        <Div className="cs-section_heading cs-style1 text-center">
          <h3 className="cs-section_subtitle">CUSTOM JOB</h3>
          <h2 className="cs-section_title">{title}</h2>
          <Spacing lg="45" md="20" />
        </Div>
        <hr />
        <Spacing lg="90" md="45" />
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
            <div style={{ textIndent: "12px" }}>{fileName}</div>
          </div>
        </section>
        <Spacing lg="50" md="35" />
        <section>
          <SectionHeading title="Question Interview" subtitle="" />
          <Spacing lg="50" md="35" />
          <Div className="container">
            <Link href={`/question/${jobid}`}>
              <div className=" cs-btn cs-style1">
                Practice interview questions
              </div>
            </Link>
          </Div>
        </section>
        <Spacing lg="50" md="35" />
        <section>
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title="Mock Interview List" subtitle="" />
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
          <Spacing lg="35" md="25" />
          <Div className="container">
            <ServiceMork data={data} jobid={jobid} activeState={active} />
          </Div>
        </section>
      </Div>
      <Spacing lg="145" md="80" />
    </>
  );
}
