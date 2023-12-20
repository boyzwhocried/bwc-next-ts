import axios from "axios";

export default async function GetAccessToken(clientId:string, clientSecret:string) {
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
        console.error(
          "Error obtaining access token:",
          (error as Error).message
        );
        throw new Error("Error obtaining access token");
      }
}
