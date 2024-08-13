"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import { useEffect, useState } from "react";

export default function question({ params: { jobId } }) {
  const [data, setData] = useState([]);
  const [questiontitle, setTitle] = useState();
  const supabase = useSupabase();

  const getQuestionData = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title,questiontable(id,question)`)
      .eq("id", jobId);
    if (error) {
      console.log(error.message);
      return;
    }
    setData(data[0].questiontable);
    setTitle(data[0].title);
  };

  useEffect(() => {
    getQuestionData();
  }, [supabase]);

  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={questiontitle}
          subtitle="QUESTION"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList variant="cs-style2" data={data} />
      </Div>
      <Spacing lg="120" md="50" />
    </>
  );
}
