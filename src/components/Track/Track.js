import "./Track.css";

function Track(props) {
  const { name, artist, album } = props.track;

  const renderAction = () => {
    if (props.isRemoval) {
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
      {renderAction()}
    </div>
  );
}

export default Track;
