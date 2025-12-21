"use client";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom green marker
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Location {
  name: string;
  lat: number;
  lng: number;
  address: string;
}

interface OfficeMapProps {
  locations: Location[];
}

export default function OfficeMap({ locations }: OfficeMapProps) {
  return (
    <MapContainer
      center={[23.5, 54.5]}   // ✅ UAE-centered
      zoom={3.2}              // ✅ tighter default zoom
      minZoom={2}
      maxZoom={6}
      className="w-full rounded-lg"
      style={{ aspectRatio: '2.5 / 1' }}
      scrollWheelZoom
      worldCopyJump={false}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />

      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap &copy; CARTO"
        noWrap
      />

      <Marker position={[25.1772, 55.3753]} icon={greenIcon}>
        <Popup autoClose={false} closeOnClick={false}>
          <div className="p-2">
            <h3 className="text-base mb-2 text-primary">Dubai</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              DSO-IFZA, IFZA Properties<br />
              Dubai Silicon Oasis<br />
              Dubai, Dubayy (AE-DU)<br />
              UAE
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
