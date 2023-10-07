import React from 'react'
import './components/css/index.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import {Home, Login, SignUp , StartGame} from './components/game/main.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/game_0" element={<StartGame />} />
      </Routes>
    </Router>
  )
}
