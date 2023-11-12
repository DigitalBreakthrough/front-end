import React, { useContext } from "react";
import { FileContext } from "../../../context/FilesContext";
import New from "../../../assets/images/new.png";
import SavePic from "../../../assets/images/save.png";
import { save } from "../../../services/VideoService";
import { STAGE } from "../../../utils/StageData";
import { addHistory, getHistory } from "../../../utils/HistoryHandler";

export default function ControlButtons() {
  const { value } = useContext(FileContext);

  const handleNewCheck = () => {
    value.setFiles(null);
    let blocks = document.getElementsByClassName("load-half");
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].removeAttribute("style");
    }
    value.setStage(STAGE.LOAD);
  };

  return (
    <div className="control_buttons">
      <button
        id="new_check"
        disabled={value.files ? false : true}
        onClick={handleNewCheck}
      >
        <img src={New} alt="" />
        Новая проверка
      </button>
      <div
        className="request-buttons"
        style={{ display: value.files ? "flex" : "none" }}
      >
        <button id="cancel-button">Отмена</button>
        <button
          id="send-button"
          onClick={() => {
            save(value.files[0])
            .then((response) => {
              value.setCurrentResult(response);
              value.setStage(STAGE.ALBUM);
            });
            let note = value.currentResult;
            console.log(note);
            // addHistory(note);
            // value.setHistory(getHistory())
            // console.log(value.currentResult !== null && value.currentResult);
            // value.setStage(STAGE.ALBUM);
          }}
        >
          Проверить
        </button>
      </div>
      <button id="download" disabled={value.files ? false : true}>
        <img src={SavePic} alt="" />
        Скачать
      </button>
    </div>
  );
}
