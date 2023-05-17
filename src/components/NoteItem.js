import React from "react";

export default function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3 mx-2">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
