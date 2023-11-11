import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/FilesContex";

export default function ProgressStage() {
  const { value } = useContext(FileContext);

  console.log(value.files);

  return (
    <div
      className="files-container"
      style={{
        display: value.files === null ? "none" : "flex",
      }}
    >
      {value.files !== null &&
        Array.from(value.files).map((file, idx) => {
          return <div key={idx}>{file.name}</div>;
        })}
    </div>
  );
}
