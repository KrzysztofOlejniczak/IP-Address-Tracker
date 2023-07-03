import React from "react";
import style from "./Map.module.css";
import SvgMarker from "../../images/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import PropTypes from "prop-types";

const MapPanel = ({ point = ["0", "0"] }) => {
  const mapPosition = point;
  const svgIcon = new Icon({
    iconUrl: SvgMarker,
    iconAnchor: [23, 56],
  });

  return (
    <div className={style.map}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={svgIcon} />
      </MapContainer>
    </div>
  );
};

export default MapPanel;

MapPanel.propTypes = {
  point: PropTypes.array.isRequired,
};
