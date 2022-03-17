import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

function SearchResults({ searchResults }) {
  return (
    <div className="SearchResults">
      <h1>Results</h1>
      <TrackList tracks={searchResults} />
    </div>
  );
}

export default SearchResults;
