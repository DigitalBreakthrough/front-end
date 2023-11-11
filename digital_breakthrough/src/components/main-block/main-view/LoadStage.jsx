import React from 'react'
import LoadPics from './LoadPics'
import LoadVideo from './LoadVideo'
import "../../../styles/index.css"

export default function LoadStage() {
  return (
    <div className='load-block'>
      <LoadPics />
      <LoadVideo />
    </div>
  )
}
