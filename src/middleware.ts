import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const protectedRoutes = ["/photograph", "/temp", "/sandbox"];

export default async function middleware(req: any) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
