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

  function handleDownloadClick() {
    // Создаем элемент <a> для скачивания файла
    const a = document.createElement('a');
    console.log(value.currentResult.attachments[0].downloadURL);
    a.href = value.currentResult.attachments[0].downloadURL;
    a.target = "_blank"; // Открываем в новой вкладке, чтобы избежать навигации в текущей вкладке
    a.download = 'myImage.png';
  
    // Добавляем элемент <a> в DOM и эмулируем клик
    document.body.appendChild(a);
    a.click();
  
    // Удаляем элемент <a> из DOM
    document.body.removeChild(a);
  }

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
        
        <button
          id="send-button"
          onClick={() => {
            console.log(value.files);
            save(value.files)
            .then((response) => {
              console.log(response);
              value.setCurrentResult(response);
              value.setStage(STAGE.ALBUM);
              console.log(value.currentResult);
              addHistory(response);
              value.setHistory(getHistory());
            });
            //console.log(value.currentResult !== null && value.currentResult);
            //console.log(value.currentResult);
            
            
            //<button id="cancel-button">Отмена</button>


            //value.setHistory(getHistory());
            // value.setStage(STAGE.ALBUM);
          }}
        >
          Проверить
        </button>
      </div>
      <a id="download" disabled={value.files ? false : true} onClick={handleDownloadClick}>
        <img src={SavePic} alt="" />
        Скачать
      </a>
    </div>
  );
}
