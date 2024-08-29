import { assistantId } from "@/config/assistant-config";
import { openai } from "@/config/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();
  try {
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });
    let run = await openai.beta.threads.runs.createAndPoll(threadId, {
      assistant_id: assistantId,
      instructions:
        "Please address the user as Jane Doe. The user has a premium account.",
    });
    if (run.status === "completed") {
      const messages = await openai.beta.threads.messages.list(run.thread_id);
      const data = messages.data[0].content[0].text.value;
      console.log(data);

      return Response.json({ msg: data });
    } else {
      return Response.json({ error: "fail" });
    }
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
