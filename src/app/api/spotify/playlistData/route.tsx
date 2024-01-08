import fs from 'fs/promises';
import path from 'path';
import GetNewPlaylistData from '../newPlaylistData/route';

const onRepeatPlaylistId = process.env.NEXT_PUBLIC_ON_REPEAT_PLAYLIST_ID;
const cacheFilePath = path.resolve('.cache/cachedPlaylistData.json');

export default async function GetPlaylistData() {
  try {
    // Check if the cache file exists
    const cacheFileContent = await fs.readFile(cacheFilePath, 'utf-8');
    const cachedPlaylistData = JSON.parse(cacheFileContent);

    const currentTime = new Date().getTime();
    if (cachedPlaylistData.expirationDate > currentTime) {
      // Calculate the difference in milliseconds
      const timeDifference = cachedPlaylistData.expirationDate - currentTime;
      // Convert milliseconds to days
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      console.log('use cached data,', `expired in ${daysDifference} days`);

      return cachedPlaylistData.data;
    }
  } catch (error) {
    // File doesn't exist or error reading file, proceed to fetch new data
  }

  console.log('use new data');
  try {
    const result = await GetNewPlaylistData(onRepeatPlaylistId as string);
    const expirationDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

    // Save the data to the cache file
    await fs.mkdir(path.dirname(cacheFilePath), { recursive: true });
    await fs.writeFile(
      cacheFilePath,
      JSON.stringify({ data: result, expirationDate }),
      'utf-8'
    );

    console.log('caching new data');
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
