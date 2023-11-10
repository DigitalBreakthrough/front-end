import React, { useRef, useState } from "react";

export default function LoadVideo() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
  };

  if (files) {
    return (
      <div>
        {Array.from(files).map((file, idx) => {
          console.log(file);
          return <div key={idx}>{file.name}</div>;
        })}
      </div>
    );
  }

  return (
    <>
      <div
        className="load-half"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div>Перетяните видео сюда</div>
        <div>или</div>
        <input
          type="file"
          accept="video/mp4"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          hidden
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>
          Выберите видео...
        </button>
      </div>
    </>
  );
}
