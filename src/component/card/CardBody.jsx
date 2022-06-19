import React from "react";

export default function CardBody({ title, createdAt, body }) {
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <div>
      <div class="card-header bg-secondary text-light">
        <h3>{title}</h3>
      </div>
      <div className="flex column card-body text-light">
        <div>
          <p className="text-secondary">{showFormattedDate(createdAt)}</p>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}
