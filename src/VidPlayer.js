//page irrelevant


import {useEffect, useRef, useState} from 'react'

//eventually need to pass the child component in through props
const VidPlayer = () => {
  const max = 128 //for testing purposes
  //states: video progress & paused/playing
  const [paused, setPaused] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  useEffect(() => {
    progressRef.current = progress
  })
  //updating progress when playing video
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused){
        setProgress(progressRef.current + 1)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
    /*
    setInterval(() => {
      if (!paused){
        setProgress(progress + 1)
        console.log('Progress:',progress)
      }
    }, 1000)
    */
  }, [paused, progress])
  return(
    <div className="VidPlayer">
      <p>Vid Paused: {String(paused)}</p>
      <p>Vid Progress: {progress}</p>
      <progress value={progress} min={0} max={max}></progress>

      <button onClick={() => {
        setPaused(!paused)
      }}>Pause/Play</button>
      <button onClick={() => {
        setProgress(0)
        setPaused(true)
      }}>Start</button>
      <button onClick={() => {
        setProgress(max)
        setPaused(true)
      }}>End</button>

    </div>
  )
}

export default VidPlayer