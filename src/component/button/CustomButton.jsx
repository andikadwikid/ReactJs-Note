import React from "react";

export default function CustomButton({ type, onDelete, id, onArchived }) {
  let button
  if (type === "create") {
    button = <button className="btn btn-primary px-5" type="submit">
      Buat
    </button>
  } else if (type === "archive") {
    button = <button className="btn btn-warning mx-1" onClick={() => onArchived(id)}>
      Arsipkan
    </button>
  } else if (type === "delete") {
    button = <button className="btn btn-danger mx-1" onClick={() => onDelete(id)}>
      Delete
    </button>
  } else if (type === "unarchive") {
    button = <button className="btn btn-warning mx-1" onClick={() => onArchived(id)}>
      Pindahkan
    </button>
  }
  return (
    <div>
      {button}
    </div>
  );
}
