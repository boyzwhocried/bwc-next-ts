"use client";

import { FaMusic } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import GetPlaylistData from "@/hooks/spotify/playlist/getPlaylistData";

interface Track {
  name: string;
  album: {
    artists: { name: string }[];
    images: { url: string }[];
  };
  external_urls: { spotify: string };
}

interface PlaylistData {
  tracks: {
    items: { track: Track }[];
  };
}

function MiniPlayer() {
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [randomSongIndex, setRandomSongIndex] = useState<number | null>(0);

  const fetchPlaylistData = async () => {
    try {
      const data = await GetPlaylistData();
      setPlaylistData(data);
      setRandomSongIndex(Math.floor(Math.random() * data.tracks.items.length));
    } catch (error) {
      console.error("Error fetching playlist data:", error);
    }
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return (
    <div>
      {playlistData && (
        <a
          className="flex w-fit p-1 pr-6 gap-2 items-center bg-gradient-to-r from-primary to-accent backdrop-blur-sm shadow-xl rounded-full sm:hover:outline outline-1"
          target="_blank"
          rel="noopener noreferrer"
          href={
            playlistData.tracks.items[randomSongIndex || 0].track.external_urls
              .spotify
          }
        >
          <Image
            className="rounded-full animate-spin-extra-slow h-16 w-16"
            src={
              playlistData.tracks.items[randomSongIndex || 0].track.album
                .images[2].url
            }
            alt="Album Cover"
            width={1000}
            height={1000}
          />
          <div>
            <h1 className="text-xs">on repeat:</h1>
            <p className="line-clamp-2 max-w-[270px]">
              {playlistData.tracks.items[randomSongIndex || 0].track.name} by{" "}
              {playlistData.tracks.items[
                randomSongIndex || 0
              ].track.album.artists
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
