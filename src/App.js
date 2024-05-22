import './App.css';
import React from 'react';
import d3 from 'd3';
import VidControl from './VidControl'
import Canvas from './Canvas'

const channels = 4 //128
const steps = 1024 //1024
const amplitude = 128
const data = []
for (let i = 0; i < channels; i++){
  data[i] = []
  for (let j = 0; j < steps; j++){
    data[i][j] = Math.floor(Math.random()*amplitude)
  }
}
console.log(data)

const FilePicker = () => {
  const handleSelect = (file) =>{
    console.log(file)
  }
  return(
    <FilePicker
      onSelect = {handleSelect}
      trigger= {<input>Pick a file</input>}
    />
  )
}

function App() {
  console.log('App running!')
  return (
    <div className="App">
      <VidControl channels={channels} max={steps} data={data}/>
    </div>
  )
}

export default App