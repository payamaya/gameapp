import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import music from './Audio/startAudio2.mp3'
const Audio = () => {
  return (
    <div>
      <div className='audio'>
        <ReactAudioPlayer
          autoPlay
          loop
          src={music}
          type='audio/mp3'
        ></ReactAudioPlayer>
      </div>
    </div>
  )
}

export default Audio
