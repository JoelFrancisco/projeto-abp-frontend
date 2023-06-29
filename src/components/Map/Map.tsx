'use client'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import bikeIcon from "../../../public/bike.png"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const DefaultIcon = L.icon({
      iconUrl: bikeIcon.src,
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, [])

  return (
    <MapContainer style={{ height: "100vh", width: "100vw"}} center={[51.505, -0.09]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          CLEBER
        </Popup>
      </Marker>
    </MapContainer>
  )
}
