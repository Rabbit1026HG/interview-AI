"use client";

import ProgressBar from "@/app/ui/ProgressBar";
import Spacing from "@/app/ui/Spacing";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "@/hooks/api";

const report = [
  {
    title: "Tell us about the job you're interviewing for",
    subtitle:
      "We use this information to generate custom practice interview questions for the job that you are applying to.",
  },
  {
    title: "Tell us about the company you're interviewing with",
    subtitle:
      "Extra details about the company can help us to generate more relevant questions. Not requied, but certainly helpful. question",
  },
  {
    title: "Upload your CV/Resume.",
    subtitle:
      "These documents can help us generate more relevant questions for your interview and we can also provide help you craft interview question answers based off of your work experience. The more information you upload, the better our tool works! Acceptable file formats are CV and pdf.",
  },
  {
    title: "Summary",
    subtitle: "",
  },
];
export default function CreateJob() {
  const api = useApi();
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("No file chosen");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const [threadId, setThreadId] = useState("");

  const router = useRouter();
  const onBack = () => {
    step && setStep(step - 1);
  };
  const onNext =()=>{
    if(step<2)setStep(step + 1);
    else {
      sendMessage(`Give me 20 question for ${jobTitle} job interview and I want to need only question without other content such as introduction, report, conclusion and so on.`);
    }
  }


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
    const data = await fetch(
      `/api/assistants/threads/${threadId}/messages`,
      {
        method: "POST",
        body: JSON.stringify({
          content: text,
        }),
      }
    );
    const data1=await data.json();
    console.log("response:",data1.msg);
    api.test({
              title: jobTitle,
              description: jobDescription,
              company: companyName,
              companyDescription: companyDescription,
              fileName: fileName,
              question:data1.msg,
            })
  };


  const handleFileUpload = async (event) => {
    const data = new FormData();
    console.log("Init data:",data)
    if (event.target.files.length < 0) return;
    data.append("file", event.target.files[0]);
    console.log("Append data:",data);
    setFileName(event.target?.files[0].name)
    await fetch("/api/assistants/files", {
      method: "POST",
      body: data,
    });
  };
  return (
    <>
      <Spacing lg="145" md="80" />
      <div className="container">
        <div className="row">
          <ProgressBar step={step} />
          <Spacing lg="50" md="35" />
          <div>
            <h2 className="cs-font_30">{report[step].title}</h2>
            <p>{report[step].subtitle}</p>
          </div>
          {step == 0 && (
            <section>
              <div className="col-sm-12">
                <label className="cs-primary_color">Title</label>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Description</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  defaultValue={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
                <Spacing lg="25" md="25" />
              </div>
            </section>
          )}
          {step == 1 && (
            <section>
              <div className="col-sm-12">
                <label className="cs-primary_color">Company name</label>
                <input
                  type="text"
                  className="cs-form_field"
                  defaultValue={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Spacing lg="20" md="20" />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Company Description</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  defaultValue={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
                <Spacing lg="25" md="25" />
              </div>
            </section>
          )}
          {step == 2 && (
            <section>
              <div className="col-sm-12">
                <label className="cs-btn cs-style1" htmlFor="choose">
                  Choose File
                </label>
                <input
                  type="file"
                  hidden
                  id="choose"
                  accept=".pdf, .doc, .docx, .md, .txt"
                  onChange={handleFileUpload}
                />
                <p>{fileName}</p>
              </div>
            </section>
          )}
          <div className="d-flex justify-content-between cs-font_22">
            <div className="cs-btn cs-style1" onClick={onBack}>
              Back
            </div>
            <div className="cs-btn cs-style1" onClick={onNext}>
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
