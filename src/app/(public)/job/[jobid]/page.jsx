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

export default function CaseStudyDetailsPage({ params: { jobid } }) {
  const [title, setTitle] = useState();
  const supabase = useSupabase();
  const getData = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title`)
      .eq("id", jobid);
    if (error) {
      console.log(error.message);
      return;
    }
    setTitle(data[0].title);
  };
  useEffect(() => {
    getData();
  }, [supabase]);

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
          <SectionHeading title="Mock Interview" subtitle="" />
          <Spacing lg="50" md="35" />
          <Div className="container">
            <Link href={`/mock/${jobid}`}>
              <div className=" cs-btn cs-style1">Mock interview questions</div>
            </Link>
          </Div>
        </section>
        <Spacing lg="50" md="35" />
      </Div>
      <Spacing lg="145" md="80" />
    </>
  );
}
