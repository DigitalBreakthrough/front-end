import React, { useContext } from 'react'
import LoadStage from './LoadStage'
import ProgressStage from './ProgressStage'
import PlayerStage from './PlayerStage'
import AlbumStage from './AlbumStage'
import ControlButtons from './ControlButtons'
import { FileContext } from '../../../context/FilesContex'
import { STAGE } from '../../../utils/StageData'

export default function MainView() {
  const contextData = useContext(FileContext);

  return (
    <div className='main-view'>
      <div className='ratio16'>
        <div className='main-viewport'>
          { contextData.stage == STAGE.LOAD ? <LoadStage /> : ""}
          { contextData.stage == STAGE.PROCESS ? <ProgressStage /> : ""}
          { contextData.stage == STAGE.PlayerStage ? <ProgressStage /> : ""}
          <AlbumStage />
        </div>
      </div>
    <ControlButtons />
    </div>
  )
  // В зависимости от типа проверки (видео или череда картинок), включается либо плеер видео, либо слайдшоу картинок
}
