import React, { useEffect } from "react";
import { useState } from "react";
import Div from "../Div";
import Spacing from "../Spacing";
import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";
import useSupabase from "@/hooks/SupabaseContext";
import openaiRepo from "@/app/_services/openai-repo";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export default function QuestionAnswer() {
  const supabase = useSupabase();
  // const useopenAI = openaiRepo();
  const [selected, setSelected] = useAtom(mockquestionnum);
  const [videoUrl, setVideoUrl] = useState("");
  const [index] = useAtom(mockquestionnum);
  const [data] = useAtom(mockquestions);
  const handelToggle = (index) => {
    setVideoUrl("");
    if (selected === index) {
      return setSelected(null);
    }
    const fileName = `video_${data[index].id}`;
    getUrl(fileName);
    setSelected(index);
  };

  const getUrl = async (fileName) => {
    if (!supabase) return;

    const { data, error } = await supabase.storage
      .from("mockvideo")
      .getPublicUrl(fileName);
    if (error) {
      console.log("Error fetching video URL:", error);
    } else {
      const url = data.publicUrl;
      setVideoUrl(url);
    }
  };

  // useEffect(() => {
  //   setSelected(index);
  // }, [index]);

  useEffect(() => {
    if (data.length) {
      const fileName = `video_${data[0].id}`;
      getUrl(fileName);
    }
  }, [supabase, data]);

  return (
    <div className="col-lg-5">
      <div className="cs-height_0 cs-height_lg_40" />
      <Div className="cs-accordians cs-style1">
        {data.map((item, index) => (
          <Div
            className={`cs-accordian ${selected === index ? "active" : ""}`}
            key={index}
          >
            <Div
              className="cs-accordian_head"
              onClick={() => handelToggle(index)}
            >
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
      {videoUrl && (
        <div className="video-wrapper">
          <video controls>
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <Spacing lg="30" md="20" />
    </div>
  );
}
