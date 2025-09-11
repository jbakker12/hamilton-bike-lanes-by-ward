
async function Wards(){
    const json = await fetch("/Ward_Boundaries.geojson").then(r => r.json())
    
    return(json)
}

export default Wards