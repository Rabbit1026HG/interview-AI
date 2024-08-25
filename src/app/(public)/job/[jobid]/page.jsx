"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceMock from "@/app/ui/ServiceList/ServiceMock";

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
    update_at: "Completed   2024-09-08",
    category: "Completed",
  },
  {
    id: 2,
    update_at: "Ready",
    category: "Ready",
  },
  {
    id: 3,
    update_at: "Ready",
    category: "Ready",
  },
  {
    id: 4,
    update_at: "Ready",
    category: "Ready",
  },
  {
    id: 5,
    update_at: "Ready",
    category: "Ready",
  },
  {
    id: 6,
    update_at: "Ready",
    category: "Ready",
  },
  {
    id: 7,
    update_at: "Ready",
    category: "Ready",
  },
];
export default function CaseStudyDetailsPage({ params: { jobid } }) {
  const [active, setActive] = useState("all");
  const [fileName, setFileName] = useState("No file chosen");
  const [title, setTitle] = useState();
  const [mockInterview, setMockInterview] = useState([]);
  const supabase = useSupabase();
  const getData = async () => {
    let cnt = 0;
    let mock = [];
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title,questiontable(state,update_at)`)
      .eq("id", jobid);
    if (error) {
      console.log(error.message);
      return;
    }
    setTitle(data[0].title);
    data[0].questiontable.map((item, index) => {
      if (item.state) cnt++;
      if ((index + 1) % 3 === 0) {
        cnt === 3
          ? mock.push({ category: "Completed", date: item.upadate_at })
          : mock.push({ category: "Ready", date: "" });
        cnt = 0;
      }
    });
    const num = data[0].questiontable.length % 3;
    if (num) {
      num === cnt
        ? mock.push({
            category: "Completed",
            date: data[0].questiontable[data[0].questiontable.length]
              .upadate_at,
          })
        : mock.push({ category: "Ready", date: "" });
    }
    setMockInterview(mock);
  };
  useEffect(() => {
    getData();
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
            <ServiceMock
              data={mockInterview}
              jobid={jobid}
              activeState={active}
            />
          </Div>
        </section>
      </Div>
      <Spacing lg="145" md="80" />
    </>
  );
}
