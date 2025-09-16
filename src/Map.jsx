// Map.jsx
import { useEffect, useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function Map(){
  const mapContainer = useRef(null);
  

  //MAP initialize
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [-79.87338389915526, 43.255498351367216] ,  //Hamilton City Hall
      zoom: 10.5,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    map.on('load',function(){map.resize();})


    //REMOVE building layers
    map.on('load', () => {
      const layers = map.getStyle().layers || [];

      layers.forEach((layer) => {
        if (
          layer['source-layer'] === 'building'|| 
          layer.id.toLowerCase().includes('building')
        ) {
          map.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    });


    //REMOVE minor street layers
    map.on('load', () => {
      const layers = map.getStyle().layers || [];

      layers.forEach((layer) => {
        if (
          layer['source-layer'] === 'minor'|| 
          layer.id.toLowerCase().includes('minor')
        ) {
          map.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    });

    //REMOVE Hamilton name layer
    map.on('load', () => {
      const layers = map.getStyle().layers || [];

      layers.forEach((layer) => {
        if (layer['source-layer'] === 'place') {
          const currentFilter = layer.filter || true;
          map.setFilter(layer.id, ['all', currentFilter, ['!=', ['get', 'name'], 'Hamilton']]);
        }
      });
    });

    //ADD WARD BOUNDARIES
    map.on('load', function(){
      map.addSource('wards', {
      type: 'geojson',
      data: '/Ward_Boundaries.geojson'
      });


    //then add ward boundaries layer
    map.addLayer({
        id: 'my-point-layer',
        type: 'line',
        source: 'wards',
        paint: {
          'line-width': 2,
          'line-dasharray': [2,3],
          'line-color': '#6e6e6eff'
      }
    });
  })

    //ADD Ward Labels
    map.on('load', function(){
      map.addLayer({
      id: 'ward-labels',
      type: 'symbol',
      source: 'wards',
      layout: {
        'text-field': ['concat', 'Ward ', ['get', 'WARD']],
        'text-font': ['Noto Sans Regular'],
        'text-size': 14,
        'text-anchor': 'center'
      },
      paint: {
        'text-color': '#000000',
        'text-halo-color': '#FFFFFF',
        'text-halo-width': 2
      }
    });})


    //ADD Bike Lanes
    map.on('load', function(){
      map.addSource('bike-lanes', {
      type: 'geojson',
      data: '/Bikeways_Colours.geojson'
      });

      
    //then add bike lanes layer
    map.addLayer({
        id: 'bike-lane-layer',
        type: 'line',
        source: 'bike-lanes',
        paint: {
          'line-width': 1.5,
          'line-color': ['get','COLOUR']
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
        source: 'bike-share-hubs',
        paint: {
          //dots will dynamically adjust with zoom level
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 10.5, 1.5, 12, 3.5],
          'circle-color': 'PURPLE'
        }
      });
    })
    

  //MOVE ward labels to front of layers
  map.on('styledata', () => {
    if (map.getLayer('ward-labels')) {
        map.moveLayer('ward-labels');
    }
});

    return () => map.remove();

    
  }, []);
  
  return <><div ref={mapContainer} style={{ width: '100%', height: '500px' }}></div></>;
};

export default Map;