import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Circle, Polyline } from "react-leaflet";
import { getLocationData } from '@/lib/data/api/cms'


const Map = (data) => {
  const [locations, setLocations] = useState([])
  const bounds = []
  
  data ? data.data.map((position,i) => {
    bounds.push([position.lat, position.lon])
  }) : null

  const getVel = (vel) => {
    if (vel == 0 && vel < 1) {
      return 0.1
    } else if (vel > 1 && vel < 15) {
      return 0.2
    } else if (vel > 15 && vel < 30) {
      return 0.4
    } else if (vel > 30 && vel < 50) {
      return 0.6
    } else if (vel > 50 && vel < 60) {
      return 0.8
    } else if (vel > 60 && vel < 70) {
      return 0.9
    } else if (vel > 70 ) {
      return 1
    } 
  };

  
  /*useEffect(() => {
    async function getData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/locations?_limit=1000&_sort=id:desc`)
      const json = setLocations(await res.json())
      console.log(json)
    }
    getData()
  }, []);*/

  const style = { 
    color: '#ffdc1c',
    weight: 0
  }

  return (
    <MapContainer
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      bounds={bounds}
    >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
        />
        <Polyline pathOptions={style} positions={bounds} />
    </MapContainer>
  );
};

export default Map;