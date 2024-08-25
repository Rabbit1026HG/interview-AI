import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
// import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg/dist/ffmpeg.min.js";

export default function openaiRepo() {
  const ffmpeg = createFFmpeg({
    corePath: "https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js",
    log: true,
  });

  async function createThread() {
    const res = await fetch(`/api/assistants/threads`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  }

  async function sendMessage(text) {
    let data = await fetch(`/api/assistants/threads/${threadId}/messages`, {
      method: "POST",
      body: JSON.stringify({
        content: text,
      }),
    });
    let dataValue = await data.json();
    return dataValue.msg;
  }

  async function transcribeAudioWithOpenAI(audioBlob) {
    const formData = new FormData();
    formData.append("file", audioBlob);
    formData.append("model", "wisper-1"); // Specify the Whisper model

    const reponse = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bear sk-proj-3geqhRHIhCV47KkhiRgLT3BlbkFJADcHtmOzgKn0GNmXq6lR`,
        },
        body: formData,
      }
    );

    if (!Response.ok) {
      console.log("Error transcribing audio:" + Response.statusText);
    }

    const data = await reponse.json();
    return data.text; // Return the transcribed text
  }

  async function extractAudio(videoBlob) {
    await ffmpeg.load();
    ffmpeg.FS("writeFile", "input.webm", await fetchFile(videoBlob));
    await ffmpeg.run("-i", "input.webm", "output.wav"); //Extract audio to WAV format
    const data = ffmpeg.FS("readFile", "output.wav");

    const audioBlob = new Blob([dta.buffer], { type: "audio/wav" });
    return audioBlob;
  }

  return { createThread, sendMessage, transcribeAudioWithOpenAI, extractAudio };
}
