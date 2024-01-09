import Image from "next/image";
// import { useEffect, useState } from "react";

interface Track {
  name: string;
  album: {
    artists: { name: string }[];
    images: { url: string }[];
  };
  external_urls: { spotify: string };
}

interface SongDataResponse {
  track: Track;
}

async function MiniPlayer() {
  const response = await fetch("/api/spotify/song-data", { method: "GET" });
  const songData: SongDataResponse | undefined = await response.json();

  // const [songData, setSongData] = useState<SongDataResponse | undefined>(
  //   undefined
  // );

  // const fetchSongData = async () => {
  //   try {
  //     const response = await fetch("/api/spotify/song-data", { method: "GET" });
  //     const songData: SongDataResponse | undefined = await response.json();
  //     setSongData(songData);
  //   } catch (error) {
  //     console.error("Error fetching song data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSongData();
  // }, []);

  return (
    <div>
      {songData && (
        <a
          className="flex w-fit p-1 pr-6 gap-2 items-center bg-gradient-to-r from-primary to-accent backdrop-blur-sm shadow-xl rounded-full sm:hover:outline outline-1"
          target="_blank"
          rel="noopener noreferrer"
          href={songData.track.external_urls.spotify}
        >
          <Image
            className="rounded-full animate-spin-extra-slow h-16 w-16"
            src={songData.track.album.images[2].url}
            alt="Album Cover"
            width={1000}
            height={1000}
          />
          <div>
            <h1 className="text-xs">on repeat:</h1>
            <p className="line-clamp-2 max-w-[270px]">
              {songData.track.name} by{" "}
              {songData.track.album.artists
                .map((artist) => artist.name)
                .join(", ")}
            </p>
          </div>
        </a>
      )}
    </div>
  );
}

export default MiniPlayer;
