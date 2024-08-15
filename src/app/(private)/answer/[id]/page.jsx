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
import Markdown from "react-markdown";
import Loader from "@/app/ui/Loader";
import { toast } from "react-toastify";
import Loading from "@/app/ui/loading";

export default function Answer({ params: { id } }) {
  const [question, setQuestion] = useState("");
  const [jobId, setJobId] = useState("");
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [weakness, setWeakness] = useState("");
  const [strength, setStrength] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const supabase = useSupabase();
  const { userId } = useAuth();

  const [threadId, setThreadId] = useState("");

  const getAnswer = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("questiontable")
      .select(`question, jobId,answertable(id,answer,weakness,strength)`)

      .eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }
    setJobId(data[0].jobId);
    setQuestion(data[0].question);
    setAnswers(data[0].answertable);
    setAnswer(data[0].answertable[0]?.answer);
    setWeakness(data[0].answertable[0]?.weakness);
    setStrength(data[0].answertable[0]?.strength);
  };

  useEffect(() => {
    getAnswer();
  }, [supabase]);

  useEffect(() => {
    const createThread = async () => {
      const res = await fetch(`/api/assistants/threads`, {
        method: "POST",
      });
      const data = await res.json();
      setThreadId(data.threadId);
    };
    createThread();
  }, []);

  const sendMessage = async (text) => {
    let data = await fetch(`/api/assistants/threads/${threadId}/messages`, {
      method: "POST",
      body: JSON.stringify({
        content: text,
      }),
    });
    const returnvalue = await data.json();
    return returnvalue.msg;
  };

  const onSave = async () => {
    if (!answer || !weakness || !strength)
      return toast.warning("The value to be saved is incorrect.", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
    setIsLoading(true);
    const ischeck = await isExist();

    if (!ischeck)
      return toast.warning("The value to be saved already exists.", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
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
    setIsLoading(false);
    toast.success("Saved successfully!", {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "fancy-progress-bar",
    });
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

  const onSubmit = async () => {
    if (!input.trim()) {
      return toast.warning("Input invalid.", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
    }
    setIsLoading(true);
    const text = `I would like to rate my answer to the question. Answer format:
Weaknesses: Less than 4 sentences. 
Strengths: Less than 4 sentences.
My question and answer are as follows:
Question: ${question}
Answer: ${input.trim()} 
Do not write any explanations or other words, just reply with the answer format.`;
    console.log("text:", text);
    let data = await sendMessage(text);
    console.log("data:", data);
    let data_array = data.split("Strengths:");

    setAnswer(input.trim());
    setStrength(data_array[1].trim());
    setWeakness(data_array[0].replace("Weaknesses:", "").trim());
    setInput("");
    setIsLoading(false);
  };
  return (
    <>
      {isLoading || (!question && <Loading />)}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Spacing lg="50" md="35" />
        <Link href={`/question/${jobId}`} className="cs-text_btn">
          <span className="cs-font_30">Question</span>
        </Link>
        <Spacing lg="20" md="10" />
        <div className="cs-m0">{question}</div>
        <br />
        <Div className="d-flex justify-content-between">
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
          <>
            <div className="cs-m0" key={index}>
              {item.answer}
            </div>
            <br />
          </>
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

        <Div className="d-flex justify-content-end">
          <button className="cs-btn cs-style1" onClick={onSubmit}>
            <span>Submit</span>
          </button>
        </Div>

        <Spacing lg="25" md="25" />
        <Div className="row">
          <Div className="col-sm-12">
            <h2 className="cs-font_30 ">Interview</h2>
            <div className="cs-m0" style={{ whiteSpace: "pre-wrap" }}>
              {answer}
            </div>
          </Div>
          <Spacing lg="25" md="25" />
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Strength</h2>
            <div className="cs-m0">
              <Markdown>{strength}</Markdown>
            </div>

            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Weakness</h2>
            <div className="cs-m0">
              <Markdown>{weakness}</Markdown>
            </div>
            <Spacing lg="25" md="25" />
          </Div>

          <Div className="d-flex justify-content-end">
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
