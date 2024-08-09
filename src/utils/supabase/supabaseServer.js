/* eslint-disable import/prefer-default-export */

import { auth } from "@clerk/nextjs/server";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function createClerkSupabaseClient() {
  const cookieStore = cookies();
  const { getToken } = auth();

  const token = await getToken({ template: "supabase" });
  const authToken = token ? { Authorization: `Bearer ${token}` } : null;

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { "Cache-Control": "no-store", ...authToken } },
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // Handle the error
        }
      },
      remove(name, options) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // Handle the error
        }
      },
    },
  });
}
