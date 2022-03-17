import "./Track.css";

function Track(props) {
  const { name, artist, album } = props.track;

  const displayButton = () => {
    if (props.isRemoved) {
      return (
        <button className="" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="" onClick={addTrack}>
          +
        </button>
      );
    }
  };

  const addTrack = () => {
    props.onAdd(props.track);
  };
  const removeTrack = () => {
    props.onRemoved(props.track);
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name} </h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      {displayButton()}
    </div>
  );
}

export default Track;
