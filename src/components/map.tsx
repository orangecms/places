'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const getIcon = (iconUrl) => (
  new L.Icon({
    iconUrl,
    iconSize: [35, 35]
  })
);

const GetRect = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (data.places.length > 0) {
      const lats = data.places.map((p) => p.lat);
      const latMin = Math.min(...lats);
      const latMax = Math.max(...lats);
      const lons = data.places.map((p) => p.lon);
      const lonMin = Math.min(...lons);
      const lonMax = Math.max(...lons);

      const center = [(latMin + latMax)/2, (lonMin + lonMax)/2];
      map.panTo(center);
    }

    return () => null;
  }, []);

  return (
    <>
      {data.places.map((p) => (
        <Marker key={p.name} position={[p.lat, p.lon]} icon={getIcon(p.icon)}>
          <Popup>
            {p.name}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const Map = ({ data }) => (
  <MapContainer style={{ height: "100%", width: "100%" }} center={[9, 13]} zoom={9} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GetRect data={data} />
  </MapContainer>
);

export default Map;
