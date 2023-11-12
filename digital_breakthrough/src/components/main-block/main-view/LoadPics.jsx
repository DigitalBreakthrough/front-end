import React, { useContext, useRef, useState } from "react";
import { FileContext } from "../../../context/FilesContext";
import { STAGE } from "../../../utils/StageData";

export default function LoadPics() {
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
  //   let block = document.getElementById("video-half");
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
    <div
      id="pics-half"
      className="load-half"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{display: !value.files ? "flex" : "none"}}
    >
      <div>Перетяните до 10 изображений сюда</div>
      <div>или</div>
      <input
        type="file"
        accept=".png, .jpg"
        multiple
        onChange={(e) => {
          const filesArray = Array.from(e.target.files);
          const defaultSequence = { camName: 'DpR-Csp-uipv-ShV-V1', files:[] };
          filesArray.forEach(file => {
            defaultSequence.files.push(file);
          });

          value.setFiles(defaultSequence)
          console.log(defaultSequence);
          value.setStage(STAGE.PROGRESS)
          console.log();
                }}
        hidden
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.click()}>
        Выберите изображения...
      </button>
    </div>
  );
}
