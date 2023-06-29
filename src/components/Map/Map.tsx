'use client'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

import bikeIcon from "../../../public/bike.png"
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import useInterval from "../../hooks/useInterval";

async function getData() {
  const API_URL = process.env.API_URL;
  const res = await fetch(`http://localhost:3000/api/getdata/1`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type BikeData = {
  bike_id: number;
  latitude: number;
  longitude: number;
  baterry: number;
  uptime_seconds: number;
}

export default function Map() {
  const [data, setData] = useState([] as BikeData[]);

  useInterval(async () => {
    try {
      const newData = await getData();
      setData(newData); 
      console.log(data);
    } catch(err: any) {
      console.log(err.message);
    }
  }, 1000);

  function formatDate(uptimeSeconds: number) {
    const date = new Date(uptimeSeconds)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}h:${minutes}min:${seconds}s`;
  }

  useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: bikeIcon.src,
      iconSize: [64,64]
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer style={{ height: "100vh", width: "50vw" }} center={[-28.703918, -49.406100]} zoom={18} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-28.703918, -49.406100]}>
        <Popup>
          <p>Latitude: {data.length > 0 ? data[0].latitude: 0}</p>
          <p>Longitude: {data.length > 0 ? data[0].longitude: 0}</p>
          <p>Bateria: {data.length > 0 ? `${data[0].baterry}%`: 0}</p>
          <p>Tempo rodado: {data.length > 0 ? formatDate(data[0].uptime_seconds) : 0}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
