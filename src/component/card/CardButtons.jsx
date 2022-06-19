import React from "react";
import CustomButton from "../button/CustomButton";

export default function CardButtons({ archived, onDelete, id, onArchived }) {
  return (
    <div className="d-flex button-group">
      <CustomButton type="delete" onDelete={onDelete} id={id} />
      {archived ? (
        <CustomButton type="unarchive" onArchived={onArchived} id={id} />
      ) : (
        <CustomButton type="archive" onArchived={onArchived} id={id} />
      )}
    </div>
  );
}
