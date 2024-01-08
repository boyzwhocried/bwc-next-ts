import GetPlaylistData from "../playlistData";

export default async function GetSongData(currentTimestamp: number) {
  try {
    const data = await GetPlaylistData();
    const playlistData = data;
 
    const randomSongIndex = Math.floor(
      currentTimestamp % data.tracks.items.length
    );

    const songData = playlistData.tracks.items[randomSongIndex || 0];
    return songData;
  } catch (error) {
    console.error("Error fetching playlist data:", error);
  }
}
