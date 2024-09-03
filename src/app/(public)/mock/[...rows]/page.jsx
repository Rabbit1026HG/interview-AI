"use client";

import { useEffect, useState } from "react";
import Spacing from "@/app/ui/Spacing";
import { toast } from "react-toastify";
import WebcamVideo from "@/app/ui/WebcamVideo";
import MockHeading from "@/app/ui/WebcamVideo/MockHeading";
import useSupabase from "@/hooks/SupabaseContext";
import Question from "@/app/ui/Question";
import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";

export default function Page({ params: { rows } }) {
  const supabase = useSupabase();
  const [start, setStart] = useState(false);
  const [, setQuestions] = useAtom(mockquestions);
  const [, setQuestionnum] = useAtom(mockquestionnum);

  const [isCamera, setIsCamera] = useState(false);

  const onStart = () => {
    if (!isCamera)
      return toast.warning("No find device !", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });

    setStart(true);
    setQuestionnum(0);
  };

  const getQuestionData = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("questiontable")
      .select(`id,question,questionnum`)
      .eq("jobId", rows[0])
      .order("questionnum", { ascending: true });

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
            <WebcamVideo
              setCamera={setIsCamera}
              start={start}
              jobId={rows[0]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
