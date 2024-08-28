import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export default async function extractAudio(videoBlob) {
  const ffmpeg = new FFmpeg();
  await ffmpeg.load();
  await ffmpeg.writeFile("input.webm", await fetchFile(videoBlob));
  await ffmpeg.exec(["-i", "input.webm", "output.mp3"]);
  const outputdata = await ffmpeg.readFile("output.mp3");
  const audioBlob = new Blob([outputdata.buffer], { type: "audio/mp3" });
  console.log("Audio extracted successfully!");
  return audioBlob;
}
