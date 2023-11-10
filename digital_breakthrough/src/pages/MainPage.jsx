import React from 'react'
import MainBlock from '../components/main-block/MainBlock';


export default function MainPage() {
    const Context = React.createContext();
  return (
    <Context.Provider>
        <div className='container'>
            <MainBlock />
            <HistoryBlock />
        </div>
    </Context.Provider>
    
  )
}
