import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/FilesContext";
import FileElem from "./FileElem";
import PicPlaceholder from "../../../assets/images/picturePlaceholder.png"

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
          const truncateName = file.name.length <= 32 ? file.name : file.name.slice(0, 32) + '...';
          return <FileElem key={idx} previewUrl={PicPlaceholder} fileName={truncateName} fileSize={(file.size/1048576).toFixed(1)} />;
        })}
    </div>
  );
}
