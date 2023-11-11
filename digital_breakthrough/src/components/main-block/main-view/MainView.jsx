import React from 'react'
import LoadStage from './LoadStage'
import ProgressStage from './ProgressStage'
import PlayerStage from './PlayerStage'
import AlbumStage from './AlbumStage'
import ControlButtons from './ControlButtons'

export default function MainView() {
  return (
    <div className='main-view'>
      <div className='ratio16'>
        <div className='main-viewport'>
          <LoadStage />
          <ProgressStage />
          <PlayerStage />
          <AlbumStage />
        </div>
      </div>
    <ControlButtons />
    </div>
  )
  // В зависимости от типа проверки (видео или череда картинок), включается либо плеер видео, либо слайдшоу картинок
}
