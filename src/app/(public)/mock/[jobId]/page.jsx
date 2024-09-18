"use client";

import SupabaseRepo from "@/app/_services/supabase-repo";
import Div from "@/app/ui/Div";
import Loading from "@/app/ui/loading";
import ServiceMock from "@/app/ui/ServiceList/ServiceMock";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";
import { useEffect, useState } from "react";

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

export default function Mock({ params: { jobId } }) {
  const [active, setActive] = useState("all");
  const [title, setTitle] = useState();
  const [mockInterview, setMockInterview] = useState([]);
  const [isLock, setIsLock] = useState(true);
  const supabase = useSupabase();
  const supabaseapi = SupabaseRepo();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    let cnt = 0;
    let mock = [];
    if (!supabase) return;
    setIsLoading(true);
    const getallowjob = await supabaseapi.getuserallowjob();
    getallowjob > 1 ? setIsLock(false) : setIsLock(true);
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title,questiontable(state,update_at,questionnum)`)
      .eq("id", jobId)
      .order("questionnum", {
        referencedTable: "questiontable",
        ascending: true,
      });
    if (error) {
      console.log(error.message);
      setIsLoading(false);
      return;
    }
    setTitle(data[0].title);
    data[0].questiontable.forEach((item, index) => {
      if (item.state) cnt++;
      if ((index + 1) % 5 === 0) {
        const category = cnt === 5 ? "Completed" : "Ready";
        const date = cnt === 5 ? item.update_at : ""; // Fixed typo from 'upadate_at' to 'update_at'
        mock.push({ category, date });
        cnt = 0; // Reset count for the next group
      }
    });
    const cnt_num = data[0].questiontable.length % 5;
    if (cnt_num !== 0) {
      const lastItem = data[0].questiontable[data[0].questiontable.length - 1];
      const category = cnt === cnt_num ? "Completed" : "Ready";
      const date = cnt === cnt_num ? lastItem.update_at : ""; // Fixed typo from 'upadate_at' to 'update_at'
      mock.push({ category, date });
    }
    setMockInterview(mock);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [supabase]);
  return (
    <div>
      {isLoading && <Loading />}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <section>
          <Div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">MOCK INTERVIEW</h3>
            <h2 className="cs-section_title">{title}</h2>
            <Spacing lg="45" md="20" />
          </Div>
          <hr />
          <Spacing lg="90" md="45" />
        </section>
        <section>
          <Div className="cs-portfolio_1_heading">
            <h3 className="cs-font_42">Mock Interview List</h3>
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
              jobId={jobId}
              activeState={active}
              lock={isLock}
            />
          </Div>
        </section>
      </Div>
      <Spacing lg="120" md="50" />
    </div>
  );
}
