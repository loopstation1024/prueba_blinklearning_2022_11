import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Exercise from './Exercise'
import ExerciseReadOnly from './ExerciseReadOnly'
import Home from './Home'

export function Nav() {
  return (
    <div>
      <h2>Navigation</h2>
      <nav id="navigation">
        <Link to="/"><button className="ui-button ui-widget ui-corner-all">Home</button></Link>
        <Link to="/exercise"><button className="ui-button ui-widget ui-corner-all">Exercise page</button></Link>
        <Link to="/show-exercise"><button className="ui-button ui-widget ui-corner-all">Show exercise</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/show-exercise" element={<ExerciseReadOnly />} />
      </Routes>
    </div>
  )
}
