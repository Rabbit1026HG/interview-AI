import React, { useEffect } from "react";
import { useState } from "react";
import Div from "../Div";
import { Icon } from "@iconify/react";
import Spacing from "../Spacing";
import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";
import { toast } from "react-toastify";

export default function Question() {
  const [selected, setSelected] = useState(0);
  const [isSpeack, setIsSpeack] = useState(false);
  const [index] = useAtom(mockquestionnum);
  const [data] = useAtom(mockquestions);

  useEffect(() => {
    setSelected(index);
  }, [index]);
  const textToSpeach = (text) => {
    if ("speechSynthesis" in window) {
      const voices = window.speechSynthesis.getVoices();
      const speech = new SpeechSynthesisUtterance(text);
      speech.voice = voices[0];
      window.speechSynthesis.speak(speech);
    } else {
      toast.error("Sorry, your browser does not support text to speech", {
        theme: "dark",
      });
    }
  };
  const stopSpeach = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    } else {
      toast.error("Sorry, your browser does not support text to speech", {
        theme: "dark",
      });
    }
  };
  return (
    <div className="col-lg-5">
      <div className="cs-height_0 cs-height_lg_40" />
      <Div className="cs-accordians cs-style1">
        {data.map((item, index) => (
          <Div
            className={`cs-accordian ${selected === index ? "active" : ""}`}
            key={index}
          >
            <Div className="cs-accordian_head">
              <h2 className="cs-accordian_title">{`Question${index + 1}`}</h2>
              <span className="cs-accordian_toggle cs-accent_color">
                <svg
                  width={15}
                  height={8}
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                </svg>
              </span>
            </Div>
            <Div className="cs-accordian_body">
              <Div className="cs-accordian_body_in">{item.question}</Div>
            </Div>
          </Div>
        ))}
      </Div>
      <Spacing lg="30" md="20" />
      <div
        className="cs-btn cs-style1 cs-type1"
        style={{ padding: "5px 5px 5px 0px" }}
        onClick={() => {
          if (isSpeack) {
            setIsSpeack(false);
            stopSpeach();
          } else {
            setIsSpeack(true);
            textToSpeach(data[selected].question);
          }
        }}
      >
        {isSpeack ? (
          <Icon icon="emojione:speaker-high-volume" height={30} width={30} />
        ) : (
          <Icon icon="emojione:speaker-low-volume" height={30} width={30} />
        )}
      </div>
      <Spacing lg="30" md="20" />
    </div>
  );
}
