"use client";

import { useEffect, useState } from "react";
import Spacing from "@/app/ui/Spacing";
import { toast } from "react-toastify";
import WebcamVideo from "@/app/ui/WebcamVideo";
import MockHeading from "@/app/ui/WebcamVideo/MockHeading";
import useSupabase from "@/hooks/SupabaseContext";
import Question from "@/app/ui/Question";
import { useAtom } from "jotai";
import { mockquestions } from "@/store";

export default function Page({ params: { rows } }) {
  const supabase = useSupabase();
  const [start, setStart] = useState(false);
  const [, setQuestions] = useAtom(mockquestions);

  const [isCamera, setIsCamera] = useState(false);

  const onStart = () => {
    // if (!isCamera)
    //   toast.warning("No find comera!", {
    //     className: "black-background",
    //     bodyClassName: "grow-font-size",
    //     progressClassName: "fancy-progress-bar",
    //   });
    // else setStart(true);
    setStart(true);
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
    setQuestions(data.slice((rows[1] - 1) * 3, rows[1] * 3));
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
            {start ? <Question /> : <MockHeading btnClick={onStart} />}
            <WebcamVideo setCamera={setIsCamera} start={start} />
          </div>
        </div>
      </section>
    </div>
  );
}
