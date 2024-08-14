"use client";

import Loader from "@/app/ui/Loader";
import Loading from "@/app/ui/loading";
import SectionHeading from "@/app/ui/SectionHeading";
import JobList from "@/app/ui/ServiceList/ServiceJobList";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import { useEffect, useState } from "react";

export default function FreelancerAgencyHome() {
  const supabase = useSupabase();
  const [data, setData] = useState([]);
  const getData = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`id,title,description`)
      .order("update_at", { ascending: false });
    if (error) {
      console.log(error.message);
      return;
    }
    data?.unshift({
      title: "Create custom job",
      description: "",
      id: "/create-job",
    });
    setData(data);
  };
  useEffect(() => {
    getData();
  }, [supabase]);
  return (
    <>
      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <Spacing lg="145" md="80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <SectionHeading title="Custom Job Interviews" subtitle="Jobs" />
              <Spacing lg="45" md="45" />
            </div>
            <div className="col-lg-7 offset-xl-1">
              <JobList data={data} />
              
            </div>
          </div>
        </div>
      </section>

      <Spacing lg="145" md="80" />
    </>
  );
}
