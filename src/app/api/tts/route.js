import { openai } from "@/config/openai";
import fs from "fs/promises";
import { createReadStream } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  console.log("ddd0");
  const formData = await request.formData(); // process file as FormData
  const audioFile = formData.get("file"); // retrieve the single file from FormData

  // // Define the temporary file path
  // console.log("ddd1");
  // const tempDir = path.join(process.cwd(), "temp");
  // console.log("ddd2");
  // const tempFilePath = path.join(tempDir, `${uuidv4()}.webm`);
  // console.log("ddd3");

  // // Ensure the temp directory exists
  // if (!fs.existsSync(tempDir)) {
  //   fs.mkdirSync(tempDir);
  // }
  // const buffer = Buffer.from(await file.arrayBuffer());
  // fs.writeFileSync(tempFilePath, buffer);
  // console.log("temp:", tempFilePath);
  const buffer = await audioFile.arrayBuffer();
  const audioBuffer = Buffer.from(buffer);

  await fs.writeFile(audioFile.name, audioBuffer);

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: createReadStream(tempFilePath),
      model: "whisper-1",
    });

    console.log(transcription.text);
    return Response.json({
      transcribedText: transcription.text,
    });
  } catch (error) {
    console.error("Error durig transcription:", error);
    return Response.json(
      {
        error: "Transcription failed",
      },
      { status: 500 }
    );
  }
}
