import React from "react";
import CardBody from "../card/CardBody";
import CardButtons from "../card/CardButtons";

export default function Card({ title, body, archived, createdAt, id, onDelete, onArchived }) {
  return (
    <div className="card my-3 border-light bg-dark">
      <CardBody title={title} body={body} createdAt={createdAt} />
      <div className="p-2">
        <CardButtons archived={archived} id={id} onDelete={onDelete} onArchived={onArchived} />
      </div>
    </div>
  );
}
