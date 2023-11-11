import React from "react";
import MainBlock from "../components/main-block/MainBlock";
import HistoryBlock from "../components/history-block/HistoryBlock";

export default function MainPage() {
  const Context = React.createContext();

  return (
    <Context.Provider value={{
      
    }}>
      <div className="container">
        <MainBlock />
        <HistoryBlock />
      </div>
    </Context.Provider>
  );
}
