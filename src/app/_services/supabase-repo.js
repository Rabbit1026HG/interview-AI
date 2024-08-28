"use client";

import useSupabase from "@/hooks/SupabaseContext";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SupabaseRepo = () => {
  const supabase = useSupabase();
  const { userId } = useAuth();
  const router = useRouter();

  async function test({
    title,
    description,
    company,
    companyDescription,
    fileName,
    question,
  }) {
    const { error, data } = await supabase
      .from("jobtable")
      .insert([
        {
          title: title,
          clerk_user_id: userId,
          description: description,
          company: company,
          company_description: companyDescription,
          file_name: fileName,
        },
      ])
      .select("id");
    if (error) console.log("create custom job error:", error);
    let question_array = [];
    question.map((item, index) => {
      question_array.push({
        clerk_user_id: userId,
        jobId: data[0].id,
        question: item.replace(/^\d+\.\s*/, ""),
        questionnum: index + 1,
      });
    });
    const { error1 } = await supabase
      .from("questiontable")
      .insert(question_array);
    if (error1) console.log("create custom question error:", error1);
    router.push("/job");
  }

  async function getJob() {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`id,title,description`)
      .order("update_at", { ascending: false });
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
    return data;
  }

  // @function  Get questions
  // @input     jobId
  // @output    data: question data
  async function getQuestion({ jobId }) {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("jobtable")
      .select(`title,questiontable(id,question)`)
      .eq("id", jobId);
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
    return data;
  }

  // @function  MockVideo create
  // @input     filename, blob: video data
  // @output    bool true&successfully or false@failure
  async function createMock(blob, fileName) {
    if (!supabase) return;
    const { data, error } = await supabase.storage
      .from("mockvideo")
      .upload(fileName, blob, { contentType: "video/webm", upsert: false });
    if (error) {
      console.log("Error uploading video:", error);
      return false;
    }
    console.log("Video uploaded successfully!");
    return true;
  }

  // @function  Insert mock result
  // @input     answer, weakness, strength,questionId
  // @output    bool true&successfully or false@failure
  async function createFeedback(answer, weakness, strength, questionId) {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("questiontable")
      .update([
        {
          answer: answer,
          weakness: weakness,
          strength: strength,
          state: true,
          update_at: new Date(),
        },
      ])
      .eq("id", questionId);
    if (error) {
      console.log(error.message);
      return false;
    }
    console.log(data);
    return true;
  }

  return { test, getJob, getQuestion, createMock, createFeedback };
};

export default SupabaseRepo;
