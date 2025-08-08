import { useState } from 'react'

import Timer from './components/Timer'

import './App.css'
import './components/Timer.css'

function App() {
  

  return (
    <div className='app-container'>
      <h1>타이머 앱</h1>
      <Timer />
    </div>
  )
}

export default App
