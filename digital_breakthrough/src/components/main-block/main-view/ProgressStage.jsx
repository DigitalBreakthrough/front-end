import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/FilesContext";
import FileElem from "./FileElem";

export default function ProgressStage() {
  const { value } = useContext(FileContext);
  
  return (
    <div
      className="files-container"
      style={{
        display: value.files === null ? "none" : "flex",
      }}
    >
      {value.files !== null &&
        Array.from(value.files).map((file, idx) => {
          return <FileElem key={idx} previewUrl={''} fileName={file.name} fileSize={file.size/1048576} loadProgress totalProgress />;
        })}
    </div>
  );
}
