import axios from "axios";
import { getSpotifyAccessToken } from "@/lib/spotify";

export async function GetNewPlaylistData(playlistId: string) {
  try {
    const accessToken = await getSpotifyAccessToken();
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
