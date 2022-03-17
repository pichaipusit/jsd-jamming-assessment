import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist({ playlistTracks }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
