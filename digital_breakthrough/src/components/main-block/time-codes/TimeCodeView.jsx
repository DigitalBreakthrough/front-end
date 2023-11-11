import React from 'react'
import TimeCode from './TimeCode'

export default function TimeCodeView() {
  return (
    <div className='timecode-container' style={{/* display:"none" */}}>
      <div className='timecode-title'>Таймкоды</div>
      <div id='timecodes'>
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={7.4} />
      </div>
    </div>
  )
}
