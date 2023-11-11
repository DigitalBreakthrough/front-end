import React, { useEffect, useState } from "react";
import MainBlock from "../components/main-block/MainBlock";
import HistoryBlock from "../components/history-block/HistoryBlock";
import "../styles/index.css";
import { FileContext } from "../context/FilesContext";
import { STAGE } from "../utils/StageData";
import { addHistory, getHistory, initHistory } from "../utils/HistoryHandler";

export default function MainPage() {
  const [stage, setStage] = useState(STAGE.LOAD);
  const [currentResult, setCurrentResult] = useState(null);
  const [files, setFiles] = useState(null);
  const [history, setHistory] = useState(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let h = getHistory();
    h === undefined ? initHistory() : setHistory(h);
  }, []);

  // addHistory({
  //   previewUrl:
  //     "https://vsrap.ru/wp-content/uploads/2020/08/bez-imeni-1-32.jpg",
  //   date: new Date(),
  //   status: 0,
  //   percentBody: 20,
  // });

  const value = {
    files,
    setFiles,
    stage,
    setStage,
    currentResult,
    setCurrentResult,
    history,
    setHistory,
    percent,
    setPercent,
  };

  return (
    <FileContext.Provider value={{ value }}>
      <div className="container">
        <MainBlock />
        <HistoryBlock />
      </div>
    </FileContext.Provider>
  );
}
