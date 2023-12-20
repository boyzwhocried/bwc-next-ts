import GetNewPlaylistData from "./getNewPlaylistData";

const onRepeatPlaylistId = process.env.NEXT_PUBLIC_ON_REPEAT_PLAYLIST_ID;

export default async function GetPlaylistData() {
  const cachedPlaylistData = JSON.parse(
    localStorage.getItem("cachedPlaylistData") || "null"
  );
  const currentTime = new Date().getTime();
  if (cachedPlaylistData && cachedPlaylistData.expirationDate > currentTime) {
    // Calculate the difference in milliseconds
    const timeDifference = cachedPlaylistData.expirationDate - currentTime;
    // Convert milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    console.log("use cached data,", `expired in ${daysDifference} days`);

    return cachedPlaylistData.data;
  } else {
    console.log("use new data");
    try {
      const result = await GetNewPlaylistData(onRepeatPlaylistId as string);
      const expirationDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem(
        "cachedPlaylistData",
        JSON.stringify({ data: result, expirationDate })
      );
      console.log('caching new data')
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
