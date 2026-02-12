import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ aircraftData }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {aircraftData.map((aircraft, index) => (
        <Marker key={index} position={[aircraft.latitude, aircraft.longitude]}>
          <Popup>
            {`Aircraft ID: ${aircraft.id}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;