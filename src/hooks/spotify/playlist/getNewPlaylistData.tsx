import axios from "axios";
import GetAccessToken from "./getAccessToken";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.SECRET;

export default async function GetNewPlaylistData(playlistId: string) {
  try {
    const accessToken = await GetAccessToken(clientId as string, clientSecret as string);
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
