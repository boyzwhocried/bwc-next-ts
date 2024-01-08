import Image from "next/image";
import GetSongData from "@/app/api/spotify/songData";

interface Track {
  name: string;
  album: {
    artists: { name: string }[];
    images: { url: string }[];
  };
  external_urls: { spotify: string };
}

async function MiniPlayer() {
  const songData = await GetSongData(new Date().getTime());

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
                .map((artist: Track) => artist.name)
                .join(", ")}
            </p>
          </div>
        </a>
      )}
    </div>
  );
}

export default MiniPlayer;
