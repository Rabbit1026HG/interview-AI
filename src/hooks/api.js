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
  }) {
    const { error } = await supabase.from("todos").insert([
      {
        title: title,
        clerk_user_id: userId,
        description: description,
        company: company,
        company_description: companyDescription,
        file_name: fileName,
      },
    ]);
    if (error) console.log("create test error", error);
    router.push("/job");
  }

  async function getJob() {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("todos")
      .select("id,title,description")
      .order("update_at", { ascending: false });
    if (error) {
      console.log(error.message);
      return;
    }
    return data;
  }
  return { test, getJob };
}
