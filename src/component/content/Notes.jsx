import React from "react";
import CardsList from "../card/CardsList";


export default function Notes({ type, notes, onDelete, onArchived }) {
  if (type === "archive") {
    const filterArchive = notes.filter((note) => note.archived === true);
    return (
      <div>
        <div className="flex">
          <CardsList notes={filterArchive} onDelete={onDelete} onArchived={onArchived} />
        </div>
      </div>
    );
  } else {
    const filterActive = notes.filter((note) => note.archived === false);
    return (
      <div>
        <div className="flex">
          <CardsList notes={filterActive} onDelete={onDelete} onArchived={onArchived} />
        </div>
      </div>
    );
  }
}
