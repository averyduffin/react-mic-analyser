import React, { useState, useEffect } from 'react';
import { getMicrophone } from './Audio';
import AudioAnalyser from './AudioAnalyser';
import './App.css';

const App = () => {
  const [audio, setAudio] = useState();

  const stopMicrophone = () => {
    audio.getTracks().forEach(track => track.stop());
    setAudio(null)
  }

  const toggleMicrophone = async () => {
    if(audio) {
      await stopMicrophone();
    } else {
      const newAudio = await getMicrophone()
      setAudio(newAudio)
    }
  }

  return (
    <div className="App">
      <div className="controls">
        <button onClick={toggleMicrophone}>{audio ? 'Stop microphone' : 'Get microphone input'}</button>
        {audio ? <AudioAnalyser audio={audio}></AudioAnalyser> : null}
      </div>
    </div>
  );
}

export default App;
