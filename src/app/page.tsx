import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function Home() {
  // hello from stackblitz

  return (
    <>
      <main className="flex p-3 items-center justify-center">
        Hello World!
        <MapContainer></MapContainer>
      </main>
    </>
  );
}
