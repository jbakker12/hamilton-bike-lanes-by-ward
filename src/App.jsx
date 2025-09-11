import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bike Lanes by Ward in Hamilton</h1>
      <div className="card">
        <p>
          This page shows bike lanes across the City of Hamilton's 15 wards in map and chart format. </p>
          <p>The goal of this page is to highlight the distribution of bike lanes, particularly highlighting the number of bike lanes in wards with higher poverty rates.</p>
      </div>
      <div class = "map">

      </div>
      <div class = "chart">
        
      </div>
    </>
  )
}

export default App
