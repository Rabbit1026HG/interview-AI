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
export { createThread, sendMessage };
