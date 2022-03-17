import React from "react";
import Track from "../Track/Track";

function TrackList({ tracks }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return <Track key={track.id} track={track} />;
      })}
      tracklist
    </div>
  );
}

export default TrackList;
