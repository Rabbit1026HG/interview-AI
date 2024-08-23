"use client";

import React, { useEffect } from "react";
import Spacing from "@/app/ui/Spacing";
import useSupabase from "@/hooks/SupabaseContext";

import { useAtom } from "jotai";
import { mockquestions } from "@/store";
import QuestionAnswer from "@/app/ui/Question/QuestionAnswer";
import Loading from "@/app/ui/loading";

export default function Page({ params: { rows } }) {
  const supabase = useSupabase();
  const [questions, setQuestions] = useAtom(mockquestions);

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
    <div style={{ minHeight: "90vh" }}>
      {!questions.length && <Loading />}
      <Spacing lg="145" md="80" />
      <div className="container">
        <div className="row align-items-center ">
          <QuestionAnswer />
          <div className="col-lg-6 offset-lg-1"></div>
        </div>
      </div>
    </div>
  );
}
