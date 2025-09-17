# Hamilton Bike Lanes by Ward

**Created by:** Jake Bakker  

### Product
An interactive map of the City of Hamilton showing bike lanes across each of the city’s 15 wards. Below the map, a chart display various statistics for each ward.

---

### Project Intent
To observe access to bike lanes across each ward, with a specific focus on neighbourhoods with higher poverty rates.

---

# Project Preview
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/356cf070-2671-474a-8544-42a8047793d2" />

> _An overview of the project page_
<br>

<img width="1364" height="810" alt="image" src="https://github.com/user-attachments/assets/1f2f55c3-0a77-4d2a-ad13-510220070fb8" />

> _A closeup of coloured bike lanes and Bike Share hubs_
<br>

<img width="2182" height="1160" alt="image" src="https://github.com/user-attachments/assets/d46a6406-98b4-4d66-8a1a-16d59c86aa93" />

> _The number of bike lanes per ward, along with their distribution according to each tier_
<br>


---

### Technologies Used
- **Languages:** React, HTML, CSS, JavaScript  
- **Frameworks/Libraries:** [MapLibre](https://maplibre.org)

---

### Data Sources

- [OpenFreeMap](#)
- [Open Hamilton - Bikeways](#)
- [Open Hamilton - Ward Boundaries](#)
- [Open Hamilton - Bike Share Incorporated Hub](#)

---

### IPO Chart

| **Input** | **Process** | **Output** |
|-----------|-------------|------------|
| `OpenFreeMap / MapLibre` | Focus map on City of Hamilton | Display base map centered on Hamilton |
| `Ward Boundaries (GEOJSON)` | Parse and overlay ward boundaries | Ward boundaries shown by color |
| `Bikeways (GEOJSON)` | Parse and overlay bike lanes | Bike lanes displayed with color coding |
| `Bikeways (CSV)` | Analyze bike lane data per ward | Chart displaying bike lane stats per ward |
| `Bike Share Hubs (GEOJSON)` | Overlay hub locations | Dots representing hubs on the map |

---

# Potential Future Additions

- Identify key neighbourhoods of interest  
- Add a map legend  
- Enable filtering by tiers and wards  
- Add interactive pop-ups for each ward

---

### Disclaimers

> **Data is accurate as of 2023.** This is the most recent dataset from the City of Hamilton’s open data portal.

---

## Bike Lane Ranking Methodology

Bike lanes are ranked from **Tier 1 (safest)** to **Tier 6 (least safe)** based on infrastructure type and auto volume:

| **Tier** | **Color** | **Description** |
|----------|-----------|------------------|
| **Tier 1** | Dark Blue | - Poured Concrete Barrier<br>- Pre-cast Concrete Barrier<br>- Signed Route with Pre-cast Barrier<br>- Mini-jersey Barrier<br>- Bollard Buffer |
| **Tier 2** | Light Blue | - Parking Buffer<br>- Paved Multi-Use Recreational Trail<br>- Multi-Use Path |
| **Tier 3** | Cyan | - Low Auto Volume Suggested Route<br>- Bicycle Path |
| **Tier 4** | Brown | - Paint Buffer Only |
| **Tier 5** | Orange | - Unprotected Bike Lane<br>- Medium Auto Volume Suggested Route |
| **Tier 6** | Red | - High Auto Volume Signed Route<br>- High Auto Volume Suggested Route<br>- Paved Shoulder |

<br>

> _*Note:* The 'Bikeways.geojson' file did not have the colours included in it. To resolve this I did the following:_
> - Converted the .geojson file to a .csv file
> - Added the colours in a new column in LibreOffice Calc according to the ranking system
> - Converted data back to a new 'Bikeways_Colours.geojson' file

---

