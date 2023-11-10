import React from 'react'
import LoadPics from './LoadPics'
import LoadVideo from './LoadVideo'

export default function LoadStage() {
  return (
    <div className='load-block'>
      <LoadPics />
      <LoadVideo />
    </div>
  )
}
