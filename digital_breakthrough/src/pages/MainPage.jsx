import React from 'react'
import MainBlock from '../components/main-block/MainBlock';
import HistoryBlock from '../components/history-block/HistoryBlock';


export default function MainPage() {
    const Context = React.createContext();

    function SetOffset(){
      const block = document.getElementById('carousel');
      block.style.left = `${block.style.left - 1000}px`;
    }

  return (
    <Context.Provider>
        <div className='container'>
          <MainBlock />
          <HistoryBlock />
        </div>
    </Context.Provider>
    
  )
}