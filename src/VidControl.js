import { max } from 'd3'
import React, {useEffect, useRef, useState} from 'react'
import Canvas from './Canvas'

const VidControl = ({channels, max, data}) => {

  //STATES: paused, progress
  const [paused, setPaused] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  useEffect(() => {
    progressRef.current = progress
  })
  //bounding progress from 0-max
  useEffect(() => {
    if (progress < 0){
      setProgress(0)
    }
    else if (progress > max-1){
      setProgress(max-1)
      setPaused(true)
    }

  }, [progress])
  //handling user input
  function handleSubmit(e){
    e.preventDefault()
    setProgress(parseInt(e.target[0].value))
    //console.log('progress:'+progress+', value:'+e.target[0].value)
  }
  //creating interval for progress
  useEffect(() => {
      const interval = setInterval(() => {
        if (!paused){
          setProgress(progressRef.current + 1)
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }, [paused, progress])

    return(
      <div className="VidControl">

        {//<Canvas id='Canvas' width={1000} height={500} paused={paused} data={data[0][progress]}/>
        }
        <Canvas paused={paused} data={data[0][progress]}/>

        <Channel id={0} data={data[0]} max={max} progress={progress}/>
        {/*
        <Channel id={1} data={data[1]}progress={progress}/>
        <Channel id={2} data={data[2]}progress={progress}/>
        <Channel id={3} data={data[3]}progress={progress}/>
        */}

        <div>
        <progress value={progress} min={0} max={max}></progress>
        </div>

        <button onClick={() => {
          setProgress(0)
          setPaused(true)
        }}>Start</button>
        <button onClick={() => {
          setProgress(progress - 10)
        }}>-10</button>
        <button onClick={() => {
          setPaused(!paused)
        }}>Pause/Start</button>
        <button onClick={() => {
          setProgress(progress + 10)
        }}>+10</button>
        <button onClick={() => {
          setProgress(max)
          setPaused(true)
        }}>End</button>

        <form onSubmit={handleSubmit}>
          <input type="text"/>
          <input type="submit" value="Jump"/>
        </form>

      </div>
    )
}

const Channel = ({id, data, max, progress}) => {
    return (
      <div>
        <p>channel: {id}, index: {progress}/{max}, data: {data[progress]}</p>
      </div>
    )
  }

  export default VidControl