"use server";
import OpenAI from "openai";
import fs from "fs";
import { createReadStream } from "fs";
import Spacing from "@/app/ui/Spacing";
let openai = null;

async function getOpenAI() {
  if (openai === null) {
    openai = new OpenAI();
  }
  return openai;
}

export default function Test() {
  async function transcribeAudio(formData) {
    "use server";
    const audioFile = formData.get("audio");

    const buffer = await audioFile.arrayBuffer();
    const audioBuffer = Buffer.from(buffer);

    await fs.writeFile(audioFile.name, audioBuffer);

    const transcription = await getOpenAI().audio.transcriptions.create({
      file: createReadStream(audioFile.name),
      model: "whisper-1",
    });
    console.log("result", transcription.text);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <Spacing lg="145" md="80" />
          <section>
            <div className="col-sm-12">
              <form action={transcribeAudio}>
                <label className="cs-btn cs-style1" htmlFor="audio">
                  Upload File
                </label>
                <input
                  type="file"
                  hidden
                  id="audio"
                  name="audio"
                  // onChange={handleFileUpload}
                />

                <button className="cs-btn cs-style1"> Upload</button>
              </form>
              {/* <div style={{ textIndent: "12px" }}>{fileName}</div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
