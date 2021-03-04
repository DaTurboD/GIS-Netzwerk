import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { getLocationData } from '@/lib/data/api/cms'


const Map = (data) => {
  const [locations, setLocations] = useState([])
  
  const bounds = []

  const getVel = (vel) => {
    if (vel == 0 && vel < 1) {
      return "white"
    } else if (vel > 1 && vel < 15) {
      return "#FFFFB7"
    } else if (vel > 15 && vel < 30) {
      return "#FFF192"
    } else if (vel > 30 && vel < 50) {
      return "#FFEA61"
    } else if (vel > 50 && vel < 60) {
      return "#FFDD3C"
    } else if (vel > 60 && vel < 70) {
      return "#FFD400"
    } else if (vel > 70 ) {
      return "yellow"
    } 
  };

  /*
  useEffect(() => {
    async function getData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/locations?_limit=1000&_sort=id:desc`)
      const json = await setLocations(res.json())
      console.log(locations)
    }
    getData()
  }, []);*/

  return (
    <MapContainer
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
      bounds={bounds}
    >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
        />
        {data ? data.data.map((position,i) => {
          bounds.push([position.lat, position.lon])
          return (
            <Circle center={[position.lat, position.lon]} radius={5} color={getVel(position.vel)} fillOpacity={.8} weight={0}/>
         )
        }):null}
    </MapContainer>
  );
};

export default Map;
