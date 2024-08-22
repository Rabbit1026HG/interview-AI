import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Spacing from "../Spacing";
import RecordButton from "./RecordButton";
export default function WebcamVideo({ setCamera, isCamera, start }) {
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

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    // width: 420,
    // height: 420,
    facingMode: "user",
  };

  const handleDevices = useCallback(
    (mediaDevices) => {
      const videoInputs = mediaDevices.filter(
        ({ kind }) => kind === "videoinput"
      );
      setCamera(videoInputs.length > 0);
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
      {isCamera ? (
        <div className="w-100 d-flex justify-content-center align-items-center">
          <Webcam
            // height={400}
            // width={400}
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
      {start && !capturing && recordedChunks.length > 0 && (
        <div onClick={handleDownload} className="cs-btn cs-style1 cs-type1">
          Download
        </div>
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
    </div>
  );
}
