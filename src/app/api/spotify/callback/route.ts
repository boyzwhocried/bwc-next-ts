import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

const REDIRECT_URI = "https://boyzwhocried.vercel.app/api/spotify/callback";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error || !code) {
    return NextResponse.json({ error: error || "No authorization code" }, { status: 400 });
  }

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { refresh_token } = response.data;
    return NextResponse.json({
      refresh_token,
      next_step: "vercel env add SPOTIFY_REFRESH_TOKEN production → paste token → vercel --prod",
    });
  } catch (err: unknown) {
    const axiosErr = err as { response?: { data: unknown } };
    return NextResponse.json(
      { error: axiosErr.response?.data ?? String(err) },
      { status: 500 }
    );
  }
}
