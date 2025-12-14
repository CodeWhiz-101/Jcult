"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
  shadowSize: [41, 41]
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
      center={[25.1772, 55.3753]}
      zoom={12}
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg"
      worldCopyJump={false}
      minZoom={2}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
        bounds={[[-90, -180], [90, 180]]}
      />
      <Marker
        position={[25.1772, 55.3753]}
        icon={greenIcon}
      >
        <Popup autoClose={false} closeOnClick={false}>
          <div className="p-2">
            <h3 className=" text-base mb-2 text-primary">Dubai</h3>
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