"use client";

import { useEffect, useState } from "react";
import Spacing from "@/app/ui/Spacing";
import { toast } from "react-toastify";
import WebcamVideo from "@/app/ui/WebcamVideo";
import MockHeading from "@/app/ui/WebcamVideo/MockHeading";
import useSupabase from "@/hooks/SupabaseContext";
import Question from "@/app/ui/Question";

export default function Page({ params: { rows } }) {
  const supabase = useSupabase();
  const [start, setStart] = useState(false);
  const [questionnum, setQuestionnum] = useState(0);

  const [isCamera, setIsCamera] = useState(false);
  const [data, setData] = useState([]);

  const onStart = () => {
    if (!isCamera)
      toast.warning("No find comera!", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
    else setStart(true);
    // setStart(true);
  };

  const onBack = () => {
    questionnum ? setQuestionnum(questionnum - 1) : router.push("/job");
  };
  const onNext = () => {
    questionnum < 2 ? setQuestionnum(questionnum + 1) : router.push("/job");
  };
  const getQuestionData = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("questiontable")
      .select(`id,question`)
      .eq("jobId", rows[0]);
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data.slice((rows[1] - 1) * 3, rows[1] * 3));
    setData(data.slice((rows[1] - 1) * 3, rows[1] * 3));
  };

  useEffect(() => {
    getQuestionData();
  }, [supabase]);
  return (
    <div>
      <Spacing lg="145" md="80" />
      <section>
        <div className="container">
          <div className="row align-items-center ">
            {start ? (
              <Question data={data} index={questionnum} />
            ) : (
              <MockHeading btnClick={onStart} />
            )}

            <WebcamVideo
              setCamera={setIsCamera}
              isCamera={isCamera}
              start={start}
            />
          </div>
        </div>
        {start ? (
          <div className="container">
            <Spacing lg="30" md="20" />
            <div className="d-flex justify-content-between ">
              {questionnum ? (
                <div className="cs-btn cs-style1 cs-type1 " onClick={onBack}>
                  <span>Prev Question</span>
                </div>
              ) : (
                <div></div>
              )}
              <div className="cs-btn cs-style1 cs-type1" onClick={onNext}>
                <span>
                  {questionnum < 2 ? "Next Question" : "End Interview"}
                </span>
              </div>
            </div>
            <Spacing lg="30" md="20" />
          </div>
        ) : (
          <div className="cs-height_150 cs-height_lg_80" />
        )}
      </section>
    </div>
  );
}
