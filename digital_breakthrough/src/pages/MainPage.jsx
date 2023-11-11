import React, { useState } from "react";
import MainBlock from "../components/main-block/MainBlock";
import HistoryBlock from "../components/history-block/HistoryBlock";
import "../styles/index.css"
import { FileContext } from "../context/FilesContex";

export default function MainPage() {
  const [files, setFiles] = useState(null);

  const value = {
    files, setFiles
  }

  return (
    <FileContext.Provider value={{value}}>
      <div className="container">
        <MainBlock />
        <HistoryBlock />
      </div>
    </FileContext.Provider>
  );
}
