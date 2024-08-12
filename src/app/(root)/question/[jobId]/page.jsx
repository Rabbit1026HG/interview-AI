"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import Spacing from "@/app/ui/Spacing";
import { useApi } from "@/hooks/api";
import { useEffect, useState } from "react";

export default function question({params:{jobId}}) {
  const api = useApi();
  const [data,setData]=useState([]);
  const [questiontitle,setTitle]=useState();
  const getQuestionData =async ()=>{
    const getdata = await api.getQuestion({jobId:jobId});
    if(getdata){

      setData(getdata[0].questiontable);
      setTitle(getdata[0].title);
    }
  };
  useEffect(()=>{
    getQuestionData();
  },[]);
  return (
    <>
      {/* Start Services Section */}
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
      {/* End Services Section */}
    </>
  );
}
