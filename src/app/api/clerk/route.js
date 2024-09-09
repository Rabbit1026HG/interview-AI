import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ``;

async function validateRequest(request) {
  const payloadString = await request.text();
  const headerPayload = request.headers;

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id"),
    "svix-timestamp": headerPayload.get("svix-timestamp"),
    "svix-signature": headerPayload.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  return wh.verify(payloadString, svixHeaders);
}

export async function POST(request) {
  const payload = await validateRequest(request);
  if (payload.type === "user.created") {
    const { id, username } = payload.data;
    console.log(id, username);

    const { error, data } = await supabase.from("users").insert({
      clerk_user_id: id,
      username: username,
    });
    if (error) {
      console.log("error:", error);
    }
  }

  return Response.json({ message: "Received" });
}

export async function GET() {
  return Response.json({ message: "Hello World!" });
}
