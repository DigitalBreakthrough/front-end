import React, { useContext } from "react";
import { FileContext } from "../../../context/FilesContex";

export default function ControlButtons() {
  const { value } = useContext(FileContext);

  const handleNewCheck = () => {
    value.setFiles(null);
    let blocks = document.getElementsByClassName("load-half");
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].removeAttribute("style");
    }
  };

  return (
    <div className="control_buttons">
      <button
        id="new_check"
        disabled={value.files ? false : true}
        onClick={handleNewCheck}
      >
        Новая проверка
      </button>
      <div
        className="request-buttons"
        style={{ display: value.files ? "flex" : "none" }}
      >
        <button>Отмена</button>
        <button>Проверить</button>
      </div>
      <button id="download" disabled={value.files ? false : true}>
        Скачать
      </button>
    </div>
  );
}
