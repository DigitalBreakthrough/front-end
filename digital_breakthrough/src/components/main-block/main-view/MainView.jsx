import React from 'react'
import LoadStage from './LoadStage'
import ProgressStage from './ProgressStage'
import PlayerStage from './PlayerStage'
import AlbumStage from './AlbumStage'

export default function MainView() {
  return (
    <div className='main-viewport'>
        <LoadStage />
        <ProgressStage />


        <PlayerStage />
        <AlbumStage />
    </div>
  )
  // В зависимости от типа проверки (видео или череда картинок), включается либо плеер видео, либо слайдшоу картинок
}
