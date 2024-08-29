import Spacing from "../Spacing";
import Markdown from "react-markdown";
import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";

export default function Feedback() {
  const [questions] = useAtom(mockquestions);
  const [questionsnum] = useAtom(mockquestionnum);
  return (
    <div className="col-lg-6 offset-lg-1">
      <div className="col-sm-12">
        <h2 className="cs-font_30 ">Answer</h2>
        <div className="cs-m0" style={{ whiteSpace: "pre-wrap" }}>
          {questions[questionsnum].answer}
        </div>
      </div>
      <Spacing lg="25" md="25" />
      <div className="col-sm-6">
        <h2 className="cs-font_30 ">Strength</h2>
        <div className="cs-m0">
          <Markdown>{questions[questionsnum].strength}</Markdown>
        </div>

        <Spacing lg="25" md="25" />
      </div>
      <div className="col-sm-6">
        <h2 className="cs-font_30 ">Weakness</h2>
        <div className="cs-m0">
          <Markdown>{questions[questionsnum].weakness}</Markdown>
        </div>
        <Spacing lg="25" md="25" />
      </div>
    </div>
  );
}
