import React, { useContext, useRef, useState } from "react";
import { FileContext } from "../../../context/FilesContext";
import { STAGE } from "../../../utils/StageData";

export default function LoadVideo() {
  const { value } = useContext(FileContext);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
  };

  // if (value.files) {
  //   console.log(value.files);
  //   let block = document.getElementById("pics-half");
  //   block.style.display = "none";
  //   return (
  //     <div className="loaded_files">
  //       {Array.from(value.files).map((file, idx) => {
  //         return <div key={idx}>{file.name}</div>;
  //       })}
  //     </div>
  //   );
  // } 
  return (
    <>
      <div
        id="video-half"
        className="load-half"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{display: !value.files ? "flex" : "none"}}
      >
        <div>Перетяните видео сюда</div>
        <div>или</div>
        <input
          type="file"
          accept="video/mp4"
          multiple
          onChange={(e) => {
            value.setStage(STAGE.PROGRESS);
            value.setFiles(e.target.files);
          }}
          hidden
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()} disabled={true}>
          Выберите видео...
        </button>
      </div>
    </>
  );
}
