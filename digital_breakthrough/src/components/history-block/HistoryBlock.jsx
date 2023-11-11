import React from 'react'
import HistoryElem from './HistoryElem'

export default function HistoryBlock() {
  return (
    <div className='history-block'>
      <div>История проверок</div>
      <HistoryElem previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" date="21-12-20 23:02" status={1} bodyPercent={20.5} />
    </div>
  )
}
