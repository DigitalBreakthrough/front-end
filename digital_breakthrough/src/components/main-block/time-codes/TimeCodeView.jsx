import React from 'react'
import TimeCode from './TimeCode'

export default function TimeCodeView() {
  return (
    <div className='timecode-container' style={{/* display:"none" */}}>
      <div className='timecode-title'>Таймкоды</div>
      <div id='timecodes'>
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={7.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={8.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={9.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={10.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={11.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={12.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={13.4} />
      <TimeCode previewUrl="https://avatars.githubusercontent.com/u/145150695?s=48&v=4" status={1} time="24:01" percentBody={14.4} />
      </div>
    </div>
  )
}
