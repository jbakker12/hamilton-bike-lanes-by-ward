
// have for loop that goes through each ward for each category
//Total bikelanes = sum
//Tier is sum of bikelanes in Tier/total bikelanes

//Then have for loop that adds to table

import { useState, useEffect } from 'react';
import Papa from 'papaparse';


function table(){
    //parse CSV file and put into array

    // let wards = {id: Number, totalBikelanes: String, tier1: Number, tier2: Number,tier3: Number,tier4: Number,tier5: Number,tier6: Number}
    
    // components/CSVReader.js


const CSVReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the CSV from the public folder
    fetch('/Bike_Chart_Stats.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      })
      .catch(error => {
        console.error('Error loading CSV:', error);
      });
  }, []);

  return (
    <>
    <div>
        <table cellPadding="5">
          <thead>
            <tr>
                <td>Ward</td>
                <td>Total Bikelanes (km)</td>
                <td bgcolor= "#073b4c">Tier 1</td>
                <td bgcolor="#118ab2">Tier 2</td>
                <td bgcolor="#06d6a0">Tier 3</td>
                <td bgcolor="#b08c71" id="tier4">Tier 4</td>
                <td bgcolor="#f78c6b">Tier 5</td>
                <td bgcolor="#ef476f">Tier 6</td>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
};

return CSVReader();

}

export default table