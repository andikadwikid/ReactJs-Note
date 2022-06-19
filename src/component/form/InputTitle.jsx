import React from "react";

export default function InputTitle({ value, change }) {
  return (

    <div className="mb-3">
      <input
        type="text"
        name="title"
        className="form-control"
        placeholder="Masukan judul ..."
        value={value}
        onChange={change}
      />
    </div>

  );
}
