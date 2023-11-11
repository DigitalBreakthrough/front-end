import React, { useCallback, useContext } from 'react'
import MainView from './main-view/MainView'
import TimeCodeView from './time-codes/TimeCodeView'
import { FileContext } from '../../context/FilesContext'
import { STAGE } from '../../utils/StageData';

export default function MainBlock() {
  const { value } = useContext(FileContext);

  return (
    <div className='main-block'>
        <MainView />
        {value.stage === STAGE.ALBUM || value.stage === STAGE.VIDEO ? <TimeCodeView /> : ""}
    </div>
  )
}