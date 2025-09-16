# Hamilton Bike Lanes by Ward

**Created by:** Jake Bakker  
**Product:**  
An interactive map of the City of Hamilton showing bike lanes across each of the city’s 15 wards. Below the map, charts display various statistics for each ward.

---

## Project Inten

To observe access to bike lanes across each ward, with a specific focus on neighbourhoods with higher poverty rates.

---

## Technologies Used

- **Languages:** React, HTML, CSS, JavaScript  
- **Frameworks/Libraries:** [MapLibre](https://maplibre.org)

---

## Data Sources

- [OpenFreeMap](https://openfreemap.org)
- [Open Hamilton - Bikeways](#)
- [Open Hamilton - Ward Boundaries](#)
- [Open Hamilton - Bike Share Incorporated Hub](#)

---

## Input → Process → Output

| **Input** | **Process** | **Output** |
|-----------|-------------|------------|
| `OpenFreeMap / MapLibre` | Focus map on City of Hamilton | Display base map centered on Hamilton |
| `Ward Boundaries (GEOJSON)` | Parse and overlay ward boundaries | Ward boundaries shown by color |
| `Bikeways (GEOJSON)` | Parse and overlay bike lanes | Bike lanes displayed with color coding |
| `Bikeways (CSV)` | Analyze bike lane data per ward | Chart displaying bike lane stats per ward |
| `Bike Share Hubs (GEOJSON)` | Overlay hub locations | Dots representing hubs on the map |

---

## Potential Future Additions

- Identify key neighbourhoods of interest  
- Add a map legend  
- Enable filtering by tiers and wards  
- Add interactive pop-ups for each ward

---

## Disclaimers

> **Data is accurate as of 2023.**  
> This is the most recent dataset from the City of Hamilton’s open data portal.

---

## Bike Lane Ranking Methodology

Bike lanes are ranked from **Tier 1 (safest)** to **Tier 6 (least safe)** based on infrastructure type and auto volume:

| **Tier** | **Color** | **Description** |
|----------|-----------|------------------|
| **1** | Dark Blue | - Poured Concrete Barrier<br>- Pre-cast Concrete Barrier<br>- Signed Route with Pre-cast Barrier<br>- Mini-jersey Barrier<br>- Bollard Buffer |
| **2** | Light Blue | - Parking Buffer<br>- Paved Multi-Use Recreational Trail<br>- Multi-Use Path |
| **3** | Cyan | - Low Auto Volume Suggested Route<br>- Bicycle Path |
| **4** | Brown | - Paint Buffer Only |
| **5** | Orange | - Unprotected Bike Lane<br>- Medium Auto Volume Suggested Route |
| **6** | Red | - High Auto Volume Signed Route<br>- High Auto Volume Suggested Route<br>- Paved Shoulder |

---

## Project Preview

> _Screenshots or live link can be added here._

---

## 📄 License

This project uses publicly available open data. Licensing of data should be verified through the respective data sources.

---

