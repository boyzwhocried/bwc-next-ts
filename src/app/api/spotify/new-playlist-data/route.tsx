import axios from "axios";
import { GetNewAccessToken } from "../new-access-token";
import { NextResponse } from "next/server";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.SECRET;
const onRepeatPlaylistId = process.env.NEXT_PUBLIC_ON_REPEAT_PLAYLIST_ID;

export async function GetNewPlaylistData(playlistId: string) {
  try {
    const accessToken = await GetNewAccessToken(
      clientId as string,
      clientSecret as string
    );
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("hit spotify api");
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist data:", (error as Error).message);
    throw new Error("Error fetching playlist data");
  }
}

export async function GET() {
  const newPlaylistData = await GetNewPlaylistData(
    onRepeatPlaylistId as string
  );
  const res = newPlaylistData;
  return NextResponse.json(res);
}
