"use client";

import ProgressBar from "@/app/ui/ProgressBar";
import Spacing from "@/app/ui/Spacing";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    title: "Tell us about the job you're interviewing for",
    subtitle:
      "These documents can help us generate more relevant questions for your interview and we can also provide help you craft interview question answers based off of your work experience. The more information you upload, the better our tool works! Acceptable file formats are CV and pdf.",
  },
  {
    title: "Summary",
    subtitle: "",
  },
];
export default function CreateJob() {
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("No file chosen");
  const router = useRouter();
  const onBack = () => {
    step && setStep(step - 1);
  };
  const onNext = () => {
    step < 3 ? setStep(step + 1) : router.push("/question");
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
          {(step == 0 || step == 3) && (
            <section>
              <div className="col-sm-12">
                <label className="cs-primary_color">Title</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Description</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </div>
            </section>
          )}
          {(step == 1 || step == 3) && (
            <section>
              <div className="col-sm-12">
                <label className="cs-primary_color">Company name</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Company Description</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </div>
            </section>
          )}
          {(step == 2 || step == 3) && (
            <section>
              <div className="col-sm-12">
                <label className="cs-btn cs-style1" for="choose">
                  Choose File
                </label>
                <input
                  type="file"
                  hidden
                  id="choose"
                  accept=".pdf, .doc, .docx, .md, .txt"
                  onChange={(e) => {
                    e.target.value
                      ? setFileName(e.target?.files[0].name)
                      : setFileName("No file chosen");
                  }}
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
