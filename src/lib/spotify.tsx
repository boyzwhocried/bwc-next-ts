import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function GetNewAccessToken() {
  try {
    const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
    const authResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        headers: {
          Authorization: authHeader,
        },
        params: {
          grant_type: "client_credentials",
        },
      }
    );
    return authResponse.data.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", (error as Error).message);
    throw new Error("Error obtaining access token");
  }
}
export const spotifyNewAccessToken = GetNewAccessToken();
