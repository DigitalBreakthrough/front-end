import React, { useState } from "react";

const images = [
  "https://i2.wp.com/miro.medium.com/1*VC8AfmFPgAjJi1uycAVIqw.png",
  "https://snapcomp.ru/images/stat/Movavi-video/movavi-slayd-scrin5.jpg",
];

const AlbumStage = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "989px",
      }}
    >
      <button onClick={handlePrev} style={{
        width: "50px",
      }}>prev</button>
      <div
        className="carousel"
        style={{
          width: "889px",
          height: "449px",
          background: `url(${images[index]}) center/100% no-repeat`,
          transitionProperty: "width",
          transitionDuration: ".5s",
          transitionTimingFunction: "linear",
        }}
      ></div>
      <button onClick={handleNext} style={{
        width: "50px",
      }}>next</button>
    </div>
  );
};

export default AlbumStage;
