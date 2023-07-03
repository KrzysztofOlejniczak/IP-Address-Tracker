import React from "react";
import style from "./Map.module.css";
import SvgMarker from "../../images/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const mapPosition = [51.505, -0.09];
  const svgIcon = new Icon({
    iconUrl: SvgMarker,
    iconAnchor: [23, 56],
  });
  return (
    <div className={style.map}>
      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={svgIcon} />
      </MapContainer>
    </div>
  );
};

export default Map;
