import { NextResponse } from "next/server";
import { GetPlaylistData } from "../playlist-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const playlistData = await GetPlaylistData();
  if (!playlistData?.tracks?.items?.length) {
    return NextResponse.json({ error: "Playlist unavailable" }, { status: 503 });
  }
  const currentTimestamp = new Date().getTime();
  const randomSongIndex = Math.floor(
    currentTimestamp % playlistData.tracks.items.length
  );
  const songData = playlistData.tracks.items[randomSongIndex || 0];
  return NextResponse.json(songData);
}
