import axios from "axios";

export async function getSpotifyAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  try {
    if (refreshToken) {
      // OAuth refresh_token flow — required for private/personal playlists
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }).toString(),
        {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data.access_token;
    }

    // Fallback: client_credentials (public content only)
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        headers: { Authorization: authHeader },
        params: { grant_type: "client_credentials" },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining Spotify access token:", (error as Error).message);
    throw new Error("Error obtaining access token");
  }
}
