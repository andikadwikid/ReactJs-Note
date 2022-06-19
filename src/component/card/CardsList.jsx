import React from "react";
import Card from "../card/Card";

export default function CardsList({ notes, onDelete, onArchived }) {
  const card = notes.map((note) => {
    return (
      <Card {...note} key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} />
    );
  });
  return (
    <section className="flex cards-container">
      {notes.length !== 0 ? card : <div class="alert alert-danger" role="alert">
        Tidak ada catatan !
      </div>}
    </section>
  );
}
