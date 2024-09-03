import { openai } from "@/config/openai";
import fs from "fs/promises";
import { createReadStream, unlinkSync } from "fs";

export async function POST(request) {
  const formData = await request.formData(); // process file as FormData
  const audioFile = formData.get("file"); // retrieve the single file from FormData
  console.log("audiofile:", audioFile);

  const buffer = await audioFile.arrayBuffer();
  const audioBuffer = Buffer.from(buffer);

  await fs.writeFile(audioFile.name, audioBuffer);

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: createReadStream(audioFile.name),
      model: "whisper-1",
    });

    unlinkSync(audioFile.name);
    console.log(transcription.text);
    return Response.json({
      msg: transcription.text,
    });
  } catch (error) {
    console.error("Error durig transcription:", error);
    return Response.json(
      {
        msg: "Transcription failed",
      },
      { status: 500 }
    );
  }
}
