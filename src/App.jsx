import { useState } from 'react'
import './App.css'
import Map from './Map.jsx'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="card">
      <h1>Bike Lanes by Ward in Hamilton</h1>
        <p>
          This page shows bike lanes across the City of Hamilton's 15 wards in map and chart format.
          <br></br>The goal of this page is to highlight the distribution of bike lanes, particularly highlighting the number of bike lanes in wards with higher poverty rates.
        </p>
      <div className = "map">
        <Map/>
     
        
      </div>
      <div className = "chart">
     
      </div>
      </div>
    </>
  )
}

export default App
