import React from 'react'
import './components/css/index.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import {Home} from './components/game/main.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  )
}
