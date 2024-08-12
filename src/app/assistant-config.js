export let assistantId = "";

if(assistantId===""){
    assistantId = process.env.OPENAI_ASSISTANT_ID;
}