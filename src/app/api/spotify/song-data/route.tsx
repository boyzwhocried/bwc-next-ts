import { NextResponse } from "next/server";
import { GetPlaylistData } from "../playlist-data";

export async function GET() {
  const playlistData = await GetPlaylistData();
  const currentTimestamp = new Date().getTime();
  const randomSongIndex = Math.floor(
    currentTimestamp % playlistData.tracks.items.length
  );
  const songData = playlistData.tracks.items[randomSongIndex || 0];
  return NextResponse.json(songData);
}
