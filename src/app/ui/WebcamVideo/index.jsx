import React, { useCallback, useEffect, useRef, useState } from "react";
import useSupabase from "@/hooks/SupabaseContext";

import Webcam from "react-webcam";
import Spacing from "../Spacing";
import RecordButton from "./RecordButton";

import { useAtom } from "jotai";
import { mockquestionnum, mockquestions } from "@/store";

export default function WebcamVideo({ setCamera, start }) {
  const supabase = useSupabase();

  const [questions] = useAtom(mockquestions);
  const [questionnum, setQuestionnum] = useAtom(mockquestionnum);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoDevices, setVideoDevices] = useState([]);
  const [audioDevices, setAudioDevices] = useState([]);
  const [audiodeviceId, setAudioDeviceId] = useState();

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
    const { data, error } = await supabase.storage
      .from("mockvideo")
      .upload(filenName, blob, {
        contentType: "video/webm",
        upsert: false,
      });
    if (error) {
      console.error("Error uploading video:", error);
    } else {
      console.log("Video uploaded successfully");
    }
    setRecordedChunks([]);
  }, [recordedChunks]);

  const onNext = () => {
    handleUpload();
    if (questionnum < questions.length - 1) {
      setQuestionnum(questionnum + 1);
    }
  };

  const handleDevices = useCallback(
    (mediaDevices) => {
      const videoInputs = mediaDevices.filter(
        ({ kind }) => kind === "videoinput"
      );
      setCamera(videoInputs.length > 0 && audioDevices[0]?.deviceId);
      setVideoDevices(videoInputs);
      setAudioDevices(
        mediaDevices.filter(({ kind }) => kind === "audiooutput")
      );
    },
    [setVideoDevices, setAudioDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div className="col-lg-6 offset-lg-1">
      {videoDevices.length ? (
        <div className="w-100 d-flex justify-content-center align-items-center">
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
