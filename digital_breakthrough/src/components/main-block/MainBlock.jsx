import React from 'react'
import MainView from './main-view/MainView'
import TimeCodeView from './time-codes/TimeCodeView'

export default function MainBlock() {
  return (
    <div classname='main-block'>
        <MainView />
        <TimeCodeView />
    </div>
  )
}
