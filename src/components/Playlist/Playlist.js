import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist({ playlistTracks, onRemoved, onNameChange, onSave }) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <TrackList
        tracks={playlistTracks}
        onRemoved={onRemoved}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
