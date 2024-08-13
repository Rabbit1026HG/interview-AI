"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from "../../../../../public/images/case_study_img_1.jpeg";
import Link from "next/link";
import useSupabase from "@/hooks/SupabaseContext";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function answer({ params: { id } }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("This is test1.");
  const [weakness, setWeakness] = useState("This is test.");
  const [strength, setStrength] = useState("This is test.");
  const supabase = useSupabase();
  const { userId } = useAuth();

  const getAnswer = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("questiontable")
      .select(`question,answertable(id,answer,weakness,strength)`)
      .eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }
    setQuestion(data[0].question);
    setAnswers(data[0].answertable);
  };

  useEffect(() => {
    getAnswer();
  }, [supabase]);

  const onSave = async () => {
    const ischeck = await isExist();

    if (!ischeck) return;
    const { data, error } = await supabase
      .from("answertable")
      .upsert({
        answer: answer,
        weakness: weakness,
        strength: strength,
        questionid: id,
        clerk_user_id: userId,
      })
      .select(`id,answer,weakness,strength`);
    if (error) {
      console.log(error.message);
      return;
    }
    getAnswer();
    console.log("Save success! :", data);
  };
  const isExist = async () => {
    if (!supabase) return false;
    const { data, error } = await supabase
      .from("answertable")
      .select()
      .eq("answer", answer)
      .eq("questionid", id);

    if (error) {
      console.log(error.message);
      return false;
    }
    if (data.length) {
      console.log("Answer exist already.");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (!input.trim()) {
      console.log("input invalid");
      return;
    }
    setAnswer(input.trim());
    setInput("");
  };
  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Web development"
          subtitle="INTERVIEW"
          variant="cs-style1 text-center"
        />
        <hr />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Thumb"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />
        <Spacing lg="100" md="50" />
        <Link href="/question" className="cs-text_btn">
          <span className="cs-font_30">Question</span>
        </Link>
        <Spacing lg="20" md="10" />
        <p className="cs-m0">{question}</p>
        <br />
        <Div className="d-flex justify-content-sm-between">
          <Link href="" className="cs-text_btn">
            <span>Prev</span>
          </Link>
          <Link href="" className="cs-text_btn">
            <span>Next</span>
          </Link>
        </Div>
        <hr />
        <br />
        {answers?.map((item, index) => (
          <p className="cs-m0" key={index}>
            {item.answer}
          </p>
        ))}

        <Div className="col-sm-12">
          <label className="cs-primary_color">Answer</label>
          <textarea
            cols="30"
            rows="7"
            className="cs-form_field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Spacing lg="25" md="25" />
        </Div>
        <Div className="d-flex justify-content-sm-end">
          <button className="cs-btn cs-style1" onClick={onSubmit}>
            <span>Submit</span>
          </button>
        </Div>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Strengh</h2>
            <p className="cs-m0">{strength}</p>

            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Weakness</h2>
            {/* <Spacing lg="40" md="30" /> */}
            <p className="cs-m0">{weakness}</p>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-12">
            <h2 className="cs-font_30 ">Interview</h2>
            {/* <Spacing lg="40" md="30" /> */}
            <p className="cs-m0">{answer}</p>
          </Div>
          <Div className="d-flex justify-content-sm-end">
            <button className="cs-btn cs-style1" onClick={onSave}>
              <span>Save</span>
            </button>
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
    </>
  );
}
