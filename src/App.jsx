import { useState, useRef } from 'react'
import './App.css'
import Map from './Map.jsx'
import Table from './Table.jsx'

function App() {
  const [count, setCount] = useState(0)
   const mapRef = useRef();

  return (
    <>
    <div className="card">
      <h1>Bike Lanes by Ward in Hamilton</h1>
        <p>
          This page shows bike lanes across the City of Hamilton's 15 wards in map and chart format.
          <br></br>The goal of this page is to highlight the distribution of bike lanes, in particular to highlight the number of bike lanes in wards with higher poverty rates.
        </p>
      <div className = "map">
        <Map ref={mapRef}/>       
      </div>
      <div className = "table" >
        <p id="dotDisclaimer"> 🟣 Purple dots represent Hamilton Bike Share Hubs</p>
        <Table/>
      </div>
    </div>
    </>
  )
}

export default App
