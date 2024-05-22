//page irrelevant


import { useRef, useEffect, useState } from "react"

const Channel = ({id, data, paused, progress}) => {
    const [index, setIndex] = useState(0)
    const indexRef = useRef(0)
    useEffect(() => {
      indexRef.current = index
    })
    useEffect(() => {
      const timer = setTimeout(() => {
        if (!paused){
            setIndex(indexRef.current + 1);
        }
      }, 1000);
      return () => {
        clearTimeout(timer);
      }
    }, [index, paused])
    return (
      <div>
        <p>id: {id}, index: {index}, data: {data[index]}</p>
      </div>
    )
  }

  export default Channel