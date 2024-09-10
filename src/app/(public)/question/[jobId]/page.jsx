"use client";

import SupabaseRepo from "@/app/_services/supabase-repo";
import Div from "@/app/ui/Div";
import Loading from "@/app/ui/loading";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import { useEffect, useState } from "react";

export default function Question({ params: { jobId } }) {
  const [data, setData] = useState([]);
  const [questiontitle, setTitle] = useState("");
  const [isLock, setIsLock] = useState(true);
  const supabase = useSupabase();
  const supabaseapi = SupabaseRepo();
  const getQuestionData = async () => {
    if (!supabase) return;
    const getallowjob = await supabaseapi.getuserallowjob();
    getallowjob > 1 ? setIsLock(false) : setIsLock(true);
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title,questiontable(id,question)`)
      .eq("id", jobId)
      .order("questionnum", {
        referencedTable: "questiontable",
        ascending: true,
      });
    if (error) {
      console.log(error.message);
      return;
    }
    console.log("questions:", data[0].questiontable);

    setData(data[0].questiontable);
    setTitle(data[0].title);
  };

  useEffect(() => {
    getQuestionData();
  }, [supabase]);

  return (
    <>
      {!data.length && <Loading />}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={questiontitle}
          subtitle="QUESTION"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList
          variant="cs-style2"
          data={data}
          jobId={jobId}
          lock={isLock}
        />
      </Div>
      <Spacing lg="120" md="50" />
    </>
  );
}
