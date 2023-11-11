import React, { useState } from "react";
import MainBlock from "../components/main-block/MainBlock";
import HistoryBlock from "../components/history-block/HistoryBlock";
import "../styles/index.css"
import { FileContext } from "../context/FilesContext";
import { STAGE } from "../utils/StageData";

export default function MainPage() {

  const [stage, setStage] = useState(STAGE.LOAD);
  const [currentResult, setCurrentResult] = useState(null);
  
  const [files, setFiles] = useState(null);

  const value = {
    files, setFiles, stage, setStage, currentResult, setCurrentResult
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
