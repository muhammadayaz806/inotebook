function NoteItem(props) {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title" style={{ marginBottom: "0" }}>
              {note.title}
            </h5>
            <i className="fa-regular fa-pen-to-square mx-1"></i>
            <i className="fa-regular fa-trash-can"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
