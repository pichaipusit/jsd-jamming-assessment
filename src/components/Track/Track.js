import "./Track.css";

function Track(props) {
  const { name, artist, album } = props.track;

  const renderAction = () => {
    props.isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action">+</button>
    );
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
