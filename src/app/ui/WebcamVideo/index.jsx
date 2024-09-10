import React, { useCallback, useEffect, useRef, useState } from "react";

import Webcam from "react-webcam";
import Spacing from "../Spacing";
import RecordButton from "./RecordButton";

import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";
import extractAudio from "@/app/_services/extractAudio";
import SupabaseRepo from "@/app/_services/supabase-repo";
import { createThread, sendMessage } from "@/app/_services/openai-repo";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function WebcamVideo({ setCamera, start, jobId, setLoading }) {
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
  const [isfeedback, setIsFeedback] = useState(false);
  const [transcriptions, setTranscriptions] = useState([
    "I can do it",
    "I can do it",
    "I can do it",
  ]);
  const [threadId, setThreadId] = useState("No thread");

  const router = useRouter();

  useEffect(() => {
    if (isfeedback) feedback();
  }, [isfeedback]);
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
        theme: "dark",
      });
      setRecordedChunks([]);

      return false;
    }
    toast.success("Transcription successfully.", {
      theme: "dark",
    });
    setTranscriptions((transcriptions) =>
      transcriptions.map((item, index) =>
        index === questionnum ? (item = transcription.msg) : item
      )
    );
    const uploadFlag = supabaseRepo.createMock(blob, filenName);
    setRecordedChunks([]);
    return uploadFlag;
  }, [recordedChunks]);
  const feedback = async () => {
    try {
      setLoading(true);
      for (const [index, item] of transcriptions.entries()) {
        const text = `I would like to rate my answer to the question. Answer format:
    Weaknesses: [Your weaknesses here, less than 10 sentences.]
    Strengths: [Your strengths here, less than 10 sentences.]
    Score: [Your score here, as a number from 0 to 10.]
    My question and answer are as follows:
    Question: ${questions[index].question}
    Answer: ${item}
    Do not write any explanations or other words, just reply with the answer format.`;

        console.log("text:", text);
        console.log("start: ", Date.now());

        let data = await sendMessage(text, threadId);

        console.log("end: ", Date.now());
        if (data.error) {
          toast.error(data.error, {
            theme: "dark",
          });
          setLoading(false);
          return;
        }

        console.log("data:", data.msg);
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
          questions[index].id
        );
        console.log("save supabase:", saveflag);

        toast.success(
          `Created feedback of question${index + 1} successfully.`,
          {
            theme: "dark",
          }
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error processing transcriptions:", error);
      toast.error("An error occurred while processing transcriptions.", {
        theme: "dark",
      });
    }
    router.push(`/mock/${jobId}`);
  };

  const onNext = async () => {
    setLoading(true);
    const flag = await handleUpload();
    if (!flag) {
      toast.error("Video Upload failed. Retry", {
        theme: "dark",
      });
      setLoading(false);
      return;
    }
    toast.success("Video Upload successfully.", {
      theme: "dark",
    });

    if (questionnum < questions.length - 1) {
      setQuestionnum(questionnum + 1);
    } else {
      setQuestionnum(0);
      setIsFeedback(true);
    }
    setLoading(false);
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
