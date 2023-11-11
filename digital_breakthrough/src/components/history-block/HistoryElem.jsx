import React, { useContext } from "react";
import DeleteImage from "../../assets/images/delete.png";
import { deleteNote, getHistory } from "../../utils/HistoryHandler";
import { FileContext } from "../../context/FilesContext";

export default function HistoryElem(props) {
  const { previewUrl, date, status, percentBody, index } = props;
  const { value } = useContext(FileContext);

  const getStatusString = (status) => {
    switch (status) {
      case 0:
        return "Нарушений нет";
      case 1:
        return "Нарушен периметр";
      case 2:
        return "Опасность!";
      default:
        return "Не определено";
    }
  };

  const getColorByPercentage = (percentage) => {
    if (percentage >= 0 && percentage <= 20) {
      // Интерполяция цвета от зеленого (0%) до красного (20%)
      let green = Math.round(255 - (percentage / 20) * 255);
      let red = Math.round((percentage / 20) * 255);
      return `rgb(${red}, ${green}, 0)`;
    } else {
      // Все значения больше 20% будут красными
      return "rgb(255, 0, 0)";
    }
  };

  const percentStyle = {
    background: getColorByPercentage(percentBody),
  };

  const handleDeleteNote = () => {
    deleteNote(index);
    let h = getHistory();
    value.setHistory(h)
  };

  return (
    <div className="history-elem">
      <img src={previewUrl} alt="" />
      <div className="meta">
        <h3>{date}</h3>
        <div>{getStatusString(status)}</div>
        <div style={percentStyle} className="percent">
          {percentBody}%
        </div>
      </div>
      <button onClick={handleDeleteNote}>
        <img src={DeleteImage} alt="" />
      </button>
    </div>
  );
}
