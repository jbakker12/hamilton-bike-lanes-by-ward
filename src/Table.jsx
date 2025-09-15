
// have for loop that goes through each ward for each category
//Total bikelanes = sum
//Tier is sum of bikelanes in Tier/total bikelanes

//Then have for loop that adds to table

function table(){
    //parse CSV file and put into array

    let wards = {id: Number, totalBikelanes: String, tier1: Number, tier2: Number,tier3: Number,tier4: Number,tier5: Number,tier6: Number}
    
    return(
        <>
        <table>
          <th><td>Ward</td><td>Total Bikelanes(m)</td><td>Tier 1</td><td>Tier 2</td><td>Tier 3</td><td>Tier 4</td><td>Tier 5</td><td>Tier 6</td></th>
          <tr><td>Ward 1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 9</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 10</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 11</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 12</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 13</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 14</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          <tr><td>Ward 15</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </table>
        </>
    )
}

export default table