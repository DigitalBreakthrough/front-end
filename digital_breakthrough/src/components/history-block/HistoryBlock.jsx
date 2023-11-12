import React, { useContext, useEffect, useState } from "react";
import HistoryElem from "./HistoryElem";
import { FileContext } from "../../context/FilesContext";
import { getHistory } from "../../utils/HistoryHandler";

export default function HistoryBlock({ history }) {
  const { value } = useContext(FileContext);

  return (
    <div className="history-block">
      <h2>История проверок</h2>
    <div className="history-list">
      
      { value.history !== undefined && value.history !== null && value.history.map((note, index) => {
        return (
          <HistoryElem
            key={index}
            previewUrl={note.data.attachments[0].downloadURL}
            date={note.date}
            status={note.data.attachments[0].status}
            percentBody={(note.data.attachments[0].percent*100).toFixed(2)}
            index={index}
          />
        );
      })} 
    </div>
    </div>
  );
}
