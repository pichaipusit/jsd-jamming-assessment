import React from "react";
import Track from "../Track/Track";

function TrackList({ tracks, onAdd, isRemoval, onRemoved }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            key={track.id}
            isRemoval={isRemoval}
            track={track}
            onAdd={onAdd}
            onRemoved={onRemoved}
          />
        );
      })}
      tracklist
    </div>
  );
}

export default TrackList;
