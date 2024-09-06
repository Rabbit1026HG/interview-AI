async function createThread() {
  try {
    const res = await fetch(`/api/assistants/threads`, {
      method: "POST",
    });
    const data = await res.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log("Error creating thread:", error);
    return error.message;
  }
}

async function sendMessage(text, threadId) {
  let data = await fetch(`/api/assistants/threads/${threadId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content: text,
    }),
  });
  let dataValue = await data.json();
  return dataValue;
}
export { createThread, sendMessage };
