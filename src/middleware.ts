import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const protectedRoutes = ["/temp", "/sandbox"];

export default async function middleware(req: any) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/auth/unauthenticated", req.nextUrl.origin);
    absoluteURL.searchParams.append("next", req.nextUrl.pathname);
    return NextResponse.redirect(absoluteURL.toString());
  }
}