import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const fetchPhotos = async () => {
    let { data: images, error } = await supabase.from("images").select("*");

    if (images) {
      return images;
    }

    if (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  const photosData = await fetchPhotos();
  return NextResponse.json(photosData);
}
