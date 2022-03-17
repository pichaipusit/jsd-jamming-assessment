import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h1>Results</h1>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
