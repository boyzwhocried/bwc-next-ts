import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { data: images, error } = await supabase.from("images").select("*");

  if (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(images ?? []);
}
