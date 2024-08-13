"use client";
import { useAuth } from "@clerk/nextjs";
import useSupabase from "./SupabaseContext";
import { useRouter } from "next/navigation";

export { useApi };

function useApi() {
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
    question.map((item) => {
      question_array.push({
        clerk_user_id: userId,
        jobId: data[0].id,
        question: item,
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

  return { test, getJob, getQuestion };
}
