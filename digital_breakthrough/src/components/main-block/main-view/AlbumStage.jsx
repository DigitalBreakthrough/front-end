import React, { useContext, useEffect, useState } from "react";
import { FileContext } from "../../../context/FilesContext";

const AlbumStage = () => {
  const { value } = useContext(FileContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    
  }, [])

  const handlePrev = () => {
    let images = value.currentResult !== null && value.currentResult.attachments;
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    let images = value.currentResult !== null && value.currentResult.attachments;
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div
      className=""
      style={{
        justifyContent: "space-between",
        width: "989px",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          width: "50px",
        }}
      >
        prev
      </button>
      <div
        className="carousel"
        style={{
          width: "889px",
          height: "449px",
          background: value.currentResult !== null && `url(${value.currentResult.attachments[0]}) center/100% no-repeat`,
          transitionProperty: "background",
          transitionDuration: ".5s",
          transitionTimingFunction: "ease-in-out",
        }}
      ></div>
      <button
        onClick={handleNext}
        style={{
          width: "50px",
        }}
      >
        next
      </button>
    </div>
  );
};

export default AlbumStage;
