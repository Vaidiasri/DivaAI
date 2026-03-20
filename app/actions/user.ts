"use server"

import { auth, currentUser } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";

export async function syncUserWithSupabase() {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Not authenticated" };

  const user = await currentUser();
  if (!user) return { success: false, error: "User not found" };

  const email = user.emailAddresses[0]?.emailAddress;
  const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

  try {
    const { data, error } = await supabase
      .from("users")
      .upsert(
        { 
          clerk_id: userId, 
          email, 
          name,
          last_login: new Date().toISOString()
        }, 
        { onConflict: "clerk_id" }
      )
      .select()
      .single();

    if (error) {
      console.error("Supabase sync error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, user: data };
  } catch (err) {
    console.error("Unexpected sync error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
