import React, { useCallback, useEffect, useRef, useState } from "react";

import Webcam from "react-webcam";
import Spacing from "../Spacing";
import RecordButton from "./RecordButton";

import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";
import extractAudio from "@/app/_services/extractAudio";
import SupabaseRepo from "@/app/_services/supabase-repo";
import { createThread, sendMessage } from "@/app/_services/openai-repo";

export default function WebcamVideo({ setCamera, start }) {
  const supabaseRepo = SupabaseRepo();
  const [questions] = useAtom(mockquestions);
  const [questionnum, setQuestionnum] = useAtom(mockquestionnum);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoDevices, setVideoDevices] = useState([]);
  const [audioDevices, setAudioDevices] = useState([]);
  const [audiodeviceId, setAudioDeviceId] = useState();
  const [transcriptions, setTranscriptions] = useState(["", "", ""]);
  const [threadId, setThreadId] = useState("No thread");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchThread() {
      const data = await createThread();
      if (data.threadId) {
        setThreadId(data.threadId);
      }
    }
    fetchThread();
  }, []);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleUpload = useCallback(async () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const filenName = `video_${questions[questionnum].id}`;

    const audioBlob = await extractAudio(blob);
    const formData = new FormData();
    formData.append("file", audioBlob, `audio.mp3`);
    const data = await fetch("/api/tts", {
      method: "POST",
      body: formData,
    });
    const transcription = await data.json();
    console.log(transcription.msg);

    if (transcription.msg.includes("Transcription failed")) {
      toast.warning("Transcription failed", {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
      setTranscriptions((transcriptions) =>
        transcriptions.map((item, index) =>
          index === questionnum ? (item = transcription.msg) : item
        )
      );
      setRecordedChunks([]);
      return false;
    }
    const uploadFlag = supabaseRepo.createMock(blob, filenName);
    setRecordedChunks([]);
    return uploadFlag;
  }, [recordedChunks]);

  const feedback = async () => {
    transcriptions.map(async (item, index) => {
      const text = `I would like to rate my answer to the question. Answer format:
Weaknesses: Less than 4 sentences. 
Strengths: Less than 4 sentences.
My question and answer are as follows:
Question: ${questions[questionnum].question}
Answer: ${item} 
Do not write any explanations or other words, just reply with the answer format.`;
      console.log("text:", text);
      let data = await sendMessage(text, threadId);
      if (data.error) {
        toast.error(data.error, {
          className: "black-background",
          bodyClassName: "grow-font-size",
          progressClassName: "fancy-progress-bar",
        });
        return;
      }
      console.log("data:", data);
      const weaknessesMatch = data.msg.match(/Weaknesses: (.*?)(?=\n)/);
      const strengthsMatch = data.msg.match(/Strengths: (.*?)(?=\n)/);
      const scoreMatch = data.msg.match(/Score: (\d+)/);

      const strength = strengthsMatch ? strengthsMatch[1].trim() : "";
      const weakness = weaknessesMatch ? weaknessesMatch[1].trim() : "";
      const score = scoreMatch ? scoreMatch[1] : null;
      const saveflag = await supabaseRepo.createFeedback(
        item,
        weakness,
        strength,
        score,
        questions[questionnum].id
      );
      toast.success(
        `Created feedback of question${questions[index + 1]} successfully.`,
        {
          className: "black-background",
          bodyClassName: "grow-font-size",
          progressClassName: "fancy-progress-bar",
        }
      );
    });
  };

  const onNext = async () => {
    const flag = await handleUpload();
    if (!flag) return;

    if (questionnum < questions.length - 1) {
      setQuestionnum(questionnum + 1);
    } else {
      feedback();
    }
  };

  const handleDevices = useCallback(
    (mediaDevices) => {
      const videoInputs = mediaDevices.filter(
        ({ kind }) => kind === "videoinput"
      );
      const audioInputs = mediaDevices.filter(
        ({ kind }) => kind === "audioinput"
      );
      setCamera(videoInputs[0]?.deviceId && audioInputs[0]?.deviceId);
      setVideoDevices(videoInputs);
      setAudioDevices(
        mediaDevices.filter(({ kind }) => kind === "audiooutput")
      );
    },
    [setVideoDevices, setAudioDevices]
  );

  useEffect(() => {
    setQuestionnum(0);
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div className="col-lg-6 offset-lg-1">
      {videoDevices.length ? (
        <div className="video-wrapper">
          <Webcam
            audio={true}
            mirrored={true}
            ref={webcamRef}
            videoConstraints={{ deviceId: audiodeviceId, facingMode: "user" }}
          />
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <img
            src="/images/webcam.png"
            alt="Your GIF description"
            className="w-50"
          />
        </div>
      )}
      {start && (
        <RecordButton
          isState={capturing}
          onStart={handleStartCaptureClick}
          onStop={handleStopCaptureClick}
        />
      )}

      <Spacing lg="20" md="20" />
      <label className="cs-primary_color">Camera</label>
      {videoDevices.length ? (
        <select name="" id="" className="cs-form_field1">
          {videoDevices.map((device, key) => (
            <option key={key} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="container">
          <i>No find camera.</i>
        </div>
      )}

      <Spacing lg="20" md="20" />
      <label className="cs-primary_color">Microphone</label>
      {audioDevices[0]?.deviceId ? (
        <select
          onChange={(e) => {
            setAudioDeviceId(e.target.value);
            console.log(e.target.value);
          }}
          className="cs-form_field1"
        >
          {audioDevices.map((device, key) => (
            <option key={key} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="container">
          <i>No find microphone.</i>
        </div>
      )}

      <Spacing lg="20" md="20" />
      {start && !capturing && recordedChunks.length > 0 && (
        <div className="d-flex justify-content-end">
          <div className="cs-btn cs-style1 cs-type1" onClick={onNext}>
            <span>
              {questionnum < questions.length - 1
                ? "Next Question"
                : "End Interviw"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
