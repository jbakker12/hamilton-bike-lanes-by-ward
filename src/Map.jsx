// Map.jsx
import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef(null);
  

  
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [-79.87338389915526, 43.255498351367216] , 
      zoom: 10.5,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    map.on('load',function(){map.resize();})


    //REMOVE building layers
    map.on('load', () => {
      const layers = map.getStyle().layers || [];

      layers.forEach((layer) => {
        if (
          layer['source-layer'] === 'building' || 
          layer.id.toLowerCase().includes('building')
        ) {
          map.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    });

    //add Wards
    map.on('load', function(){
      map.addSource('wards', {
      type: 'geojson',
      data: '/Ward_Boundaries.geojson'
      });


    //then add a layer
    map.addLayer({
        id: 'my-point-layer',
        type: 'line',
        source: 'wards', // Reference the source by its ID
        paint: {
          'line-width': 2,
          'line-color': '#a8a8a8ff'
      }
    });
  })

    //add Bike Lanes
    map.on('load', function(){
      map.addSource('bike-lanes', {
      type: 'geojson',
      data: '/Bikeways.geojson'
      });


    //then add a layer
    map.addLayer({
        id: 'bike-lane-layer',
        type: 'line',
        source: 'bike-lanes', // Reference the source by its ID
        paint: {
          'line-width': 1,
          'line-color': '#4CBB17'
      }
    });
  })

  //ADD BIKE SHARE HUBS
     map.on('load', function(){
      map.addSource('bike-share-hubs', {
      type: 'geojson',
      data: '/Hamilton_Bike_Share_Incorporated_Hubs.geojson'
      });


    //then add a layer
    map.addLayer({
        id: 'bike-share-hubs-layer',
        type: 'circle',
        source: 'bike-share-hubs', // Reference the source by its ID
        paint: {
          'circle-radius': 3,
          'circle-color': '#2d2d2dff'
      }
    });
  })

    return () => map.remove();

    
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Map;