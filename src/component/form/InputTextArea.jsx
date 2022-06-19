import React from "react";

export default function InputTextArea({ value, change }) {
  return (
    <div className="mb-3">
      <textarea
        className="form-control"
        rows={3}
        placeholder="Tuliskan catatan ..."
        name="body"
        value={value}
        onChange={change}
      ></textarea>
    </div>
  );
}
