import "./song_table.css";
import { fetchSongs } from "./api";
import { useEffect, useState } from "react";
import TableView from "@/components/table_view/table_view";

import { Song } from "./types";

import Search from "@/components/search/search";

const columns = [
  { title: "ID", key: "id", weight: "2fr" },
  { title: "Title", key: "title", weight: "5fr" },
  { title: "Danceability", key: "danceability", weight: "3fr" },
  { title: "Energy", key: "energy", weight: "2fr" },
  { title: "Mode", key: "mode", weight: "2fr" },
  { title: "Acousticness", key: "acousticness", weight: "3fr" },
  { title: "Tempo", key: "tempo", weight: "2fr" },
  { title: "Duration", key: "duration_ms", weight: "2fr" },
  { title: "Sections", key: "num_sections", weight: "2fr" },
  { title: "Segments", key: "num_segments", weight: "2fr" },
];

function Body({ songList }: { songList?: Song[] }) {
  if (!songList) {
    return <div>Loading..</div>;
  }

  if (songList.length === 0) {
    return <div>No songs found</div>;
  }

  return <TableView columns={columns} data={songList} />;
}

function SongTable() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [songList, setSongList] = useState<Song[]>();
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchSongs(searchQuery)
      .then((res) => {
        setError(false);

        // console.log(res);
        setSongList(res.data as Song[]);
      })
      .catch((errors) => {
        setError(true);
        console.log(errors);
      });
  }, [searchQuery]);

  return (
    <div className="flex-column">
      <Search
        onSubmit={(query: string) => {
          setSearchQuery(query);
        }}
      />
      <div className="tableWrapper">
        {isError ? (
          <div>Error occurred while fetching songs</div>
        ) : (
          <Body songList={songList} />
        )}
      </div>
    </div>
  );
}

export default SongTable;
