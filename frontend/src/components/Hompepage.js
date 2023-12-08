import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvent } from 'react-leaflet';
import TamilNadu from './TamilNadu';
import saravanampatti from './saravanampatti';
import Navbar from './Navbar';
import KCT from './KCT';

const IndiaMap = () => {
  const [zoomLevel, setZoomLevel] = useState(13);
  const [data, setData] = useState(TamilNadu);
  const [key, setKey] = useState(0); // Key to force re-render of GeoJSON

  const position = [11.0797, 76.9997];

  const handleZoomChange = (zoom) => {
    setZoomLevel(zoom);
    console.log(zoom);
  };

  const MapEvents = () => {
    const map = useMapEvent('zoom', (e) => {
      handleZoomChange(map.getZoom());
    });
    return null;
  };

  // Update GeoJSON data and key when zoom level changes
  React.useEffect(() => {
    if (zoomLevel <= 20 && zoomLevel >= 14) {
      setData(KCT);
    } else if (zoomLevel >= 11) {
      setData(saravanampatti);
    } else {
      setData(TamilNadu);
    }
    // Incrementing key to force re-render of GeoJSON
    setKey((prevKey) => prevKey + 1);
  }, [zoomLevel]);

  return (
    <div className="main">
      <Navbar />
      <div className="main-right">
        <div className="map-container">
          <MapContainer
            center={position}
            zoom={zoomLevel}
            style={{ height: '90vh', width: '50%', float: 'right' }}
          >
            <MapEvents />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Use key to force re-render of GeoJSON */}
            <GeoJSON
              key={key + JSON.stringify(data)} 
              data={data}
              style={() => ({
                fillColor: 'red',
                color: 'black',
                weight: 1,
                fillOpacity: 0.2,
              })}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
