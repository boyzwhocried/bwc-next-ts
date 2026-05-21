import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const REDIRECT_URI = "https://boyzwhocried.vercel.app/api/spotify/callback";

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const scope = "playlist-read-private playlist-read-collaborative";
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId!,
    scope,
    redirect_uri: REDIRECT_URI,
  });
  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}
