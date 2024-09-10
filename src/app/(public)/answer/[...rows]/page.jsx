"use client";

import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import Link from "next/link";
import useSupabase from "@/hooks/SupabaseContext";
import { use, useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Markdown from "react-markdown";
import { toast } from "react-toastify";
import Loading from "@/app/ui/loading";
import { createThread, sendMessage } from "@/app/_services/openai-repo";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import SupabaseRepo from "@/app/_services/supabase-repo";

export default function Answer({ params: { rows } }) {
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [weakness, setWeakness] = useState("");
  const [strength, setStrength] = useState("");
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const supabase = useSupabase();
  const supabaseapi = SupabaseRepo();
  const { userId } = useAuth();
  const router = useRouter();

  const [threadId, setThreadId] = useState("No thread");
  const getAnswer = async (index, jobId, questionnum) => {
    if (!supabase) return;
    const getallowjob = await supabaseapi.getuserallowjob();
    if (getallowjob < 2 && rows[1] > 2) {
      router.push("/#price");
      return;
    }
    const { data, error } = await supabase
      .from("questiontable")
      .select(
        `id,question,questionnum,answertable(id,answer,weakness,strength,score)`
      )
      .eq("jobId", jobId)
      .eq("questionnum", questionnum)
      .order("created_at", {
        referencedTable: "answertable",
        ascending: false,
      });

    if (error) {
      console.log(error.message);
      return;
    }
    setQuestionId(data[0].id);
    setQuestion(data[0].question);
    setAnswers(data[0].answertable);
    setAnswer(data[0].answertable[index]?.answer);
    setWeakness(data[0].answertable[index]?.weakness);
    setStrength(data[0].answertable[index]?.strength);
    setScore(data[0].answertable[index]?.score);
  };

  useEffect(() => {
    getAnswer(0, rows[0], rows[1]);
  }, [supabase]);

  useEffect(() => {
    async function fetchThread() {
      const data = await createThread();
      if (data.threadId) {
        setThreadId(data.threadId);
      }
    }
    fetchThread();
  }, []);
  const pagebuton = (isNext) => {
    isNext
      ? rows[1] < 20
        ? router.push(`/answer/${rows[0]}/${Number(rows[1]) + 1}`)
        : router.push(`/question/${rows[0]}`)
      : rows[1] > 1
      ? router.push(`/answer/${rows[0]}/${Number(rows[1]) - 1}`)
      : router.push(`/question/${rows[0]}`);
  };
  const onSave = async (isNext) => {
    console.log("NEXT", isNext, "rows:", rows[1] + 1);
    pagebuton(isNext);
    if (!answer || !weakness || !strength) {
      return;
    }
    setIsLoading(true);
    const ischeck = await isExist();

    if (!ischeck) {
      setIsLoading(false);
      pagebuton(isNext);
      return;
    }
    const { data, error } = await supabase
      .from("answertable")
      .upsert({
        answer: answer,
        weakness: weakness,
        strength: strength,
        score: score,
        questionid: questionId,
        clerk_user_id: userId,
      })
      .select(`id,answer,weakness,strength,score`);
    if (error) {
      setIsLoading(false);
      pagebuton(isNext);
      console.log(error.message);
      return;
    }
    pagebuton(isNext);
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
      .eq("questionid", questionId);

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
  const onGenerate = async () => {
    setIsLoading(true);
    const text = `Please answer the question.
Question: ${question}
Please answer in 10 sentences or 3 paragraphs without explanation or other words.`;
    let data = await sendMessage(text, threadId);
    setIsLoading(false);
    if (data.error) {
      toast.error(data.error, {
        theme: "dark",
      });
      return;
    }
    setInput(data.msg);
  };
  const onSubmit = async () => {
    if (!input.trim()) {
      return toast.warning("Answer is required.", {
        theme: "dark",
      });
    }
    setIsLoading(true);
    const text = `I would like to rate my answer to the question. Answer format:
Weaknesses: [Your weaknesses here, less than 10 sentences.]
Strengths: [Your strengths here, less than 10 sentences.]
Score: [Your score here, as a number from 0 to 10.]
My question and answer are as follows:
Question: ${question}
Answer: ${input.trim()}
Do not write any explanations or other words, just reply with the answer format.`;

    let data = await sendMessage(text, threadId);
    setIsLoading(false);
    if (data.error) {
      toast.error(data.error, {
        theme: "dark",
      });
      return;
    }
    console.log("data:", data);
    const weaknessesMatch = data.msg.match(/Weaknesses: (.*?)(?=\n)/);
    const strengthsMatch = data.msg.match(/Strengths: (.*?)(?=\n)/);
    const scoreMatch = data.msg.match(/Score: (\d+)/);

    setAnswer(input.trim());
    setStrength(strengthsMatch ? strengthsMatch[1].trim() : "");
    setWeakness(weaknessesMatch ? weaknessesMatch[1].trim() : "");
    setScore(scoreMatch ? parseInt(scoreMatch[1]) : null);
    setInput("");
  };
  return (
    <>
      {(isLoading || !question) && <Loading />}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Spacing lg="50" md="35" />
        <Link href={`/question/${rows[0]}`} className="cs-text_btn">
          <span className="cs-font_38">Question</span>
        </Link>
        <Spacing lg="20" md="10" />
        <div className="cs-m0">{question}</div>
        <br />
        <hr />
        <br />
        {answers?.map((item, index) => (
          <div key={index} className="custombtn">
            <br />
            <div
              className="cs-m0 line-clamp"
              onClick={() => getAnswer(index, rows[0], rows[1])}
            >
              {item.answer}
            </div>
            <br />
            <hr />
          </div>
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

        <Div className="d-flex justify-content-end gap-4">
          <button
            className="cs-btn cs-style1 "
            onClick={onGenerate}
            style={{ paddingLeft: "5px" }}
          >
            <Icon icon="token-branded:ait" height={30} width={30} />
            <span> Generate Answer</span>
          </button>
          <button className="cs-btn cs-style1" onClick={onSubmit}>
            <span>Submit</span>
          </button>
        </Div>

        <Spacing lg="25" md="25" />
        <Div className="row">
          <Div className="col-sm-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="cs-font_30 ">Interview</h2>

              <Div className="cs-rating">
                <Div
                  className="cs-rating_bg"
                  style={{ backgroundImage: "url(/images/rating.svg)" }}
                />
                <Div
                  className="cs-rating_percentage"
                  style={{
                    backgroundImage: "url(/images/rating.svg)",
                    width: `${score * 10}%`,
                  }}
                />
              </Div>
            </div>
            <div className="cs-m0" style={{ whiteSpace: "pre-wrap" }}>
              {answer}
            </div>
          </Div>
          <Spacing lg="25" md="25" />
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">
              <span>Strength </span>
              <Icon icon="iwwa:good-o" style={{ color: "#ff4a17" }} />
            </h2>
            <div className="cs-m0">
              <Markdown>{strength}</Markdown>
            </div>

            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">
              <span>Weakness </span>
              <Icon icon="iwwa:bad-o" style={{ color: "#ff4a17" }} />
            </h2>
            <div className="cs-m0">
              <Markdown>{weakness}</Markdown>
            </div>
            <Spacing lg="25" md="25" />
          </Div>

          <Div className="d-flex justify-content-between">
            <button
              className="cs-btn cs-style1 cs-type1"
              onClick={() => onSave(false)}
            >
              <span>Prev</span>
            </button>
            <button
              className="cs-btn cs-style1 cs-type1"
              onClick={() => onSave(true)}
            >
              <span>Next</span>
            </button>
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
    </>
  );
}
