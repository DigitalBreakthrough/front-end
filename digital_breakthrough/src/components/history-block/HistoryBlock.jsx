import React, { useContext, useEffect, useState } from "react";
import HistoryElem from "./HistoryElem";
import { FileContext } from "../../context/FilesContext";
import { getHistory } from "../../utils/HistoryHandler";

export default function HistoryBlock({ history }) {
  const { value } = useContext(FileContext);

  console.log(value);

  return (
    <div className="history-block">
      <h2>История проверок</h2>
      { value.history !== undefined && value.history.map((note, index) => {
        return (
          <HistoryElem
            previewUrl={note.previewUrl}
            date={note.date}
            status={note.status}
            percentBody={note.percentBody}
            index={index}
          />
        );
      })} 
    </div>
  );
}
