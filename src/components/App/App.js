import React, { useState, useEffect } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import {
  searchData,
  playlistName as pln,
  playlistTracks,
} from "../SearchResults/SearchData";
import "./App.css";
import Spotify from "../../utils/Spotify";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTrackz, setPlaylistTrackz] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  // Add & Remove a Track
  const addTrack = (track) => {
    if (playlistTrackz.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTrackz([...playlistTrackz, track]);
  };
  const removeTrack = (track) => {
    let newTracks = playlistTrackz.filter(
      (trackItem) => trackItem.id !== track.id
    );
    setPlaylistTrackz(newTracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  const savePlaylist = () => {
    const trackURIs = playlistTrackz.map((track) => track.uri);
    Spotify.savePlayList(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTrackz([]);
    });
  };
  const search = (term) => {
    Spotify.search(term).then((searchResult) => {
      setSearchResult(searchResult);
    });
  };
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResult} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTrackz}
            onRemoved={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
