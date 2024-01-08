import GetPlaylistData from "../playlistData";

interface Track {
  name: string;
  album: {
    artists: { name: string }[];
    images: { url: string }[];
  };
  external_urls: { spotify: string };
}

export default async function GetSongData() {
  try {
    const data = await GetPlaylistData();
    const playlistData = data;
    const randomSongIndex = Math.floor(
      Math.random() * data.tracks.items.length
    );

    return playlistData.tracks.items[randomSongIndex || 0];
  } catch (error) {
    console.error("Error fetching playlist data:", error);
  }
}
