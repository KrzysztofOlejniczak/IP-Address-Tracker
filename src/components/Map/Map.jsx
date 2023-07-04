import React, { useEffect, useState } from "react";
import style from "./Map.module.css";
import SvgMarker from "../../images/icon-location.svg";
import { Map, Marker } from "pigeon-maps";
import PropTypes from "prop-types";

const MapPanel = ({ point = ["0", "0"] }) => {
  const [center, setCenter] = useState(point);

  useEffect(() => {
    setCenter(point);
  }, [point]);

  return (
    <div className={style.map}>
      <Map center={center} defaultZoom={11}>
        <Marker width={50} anchor={center}>
          <img src={SvgMarker} alt="Marker" />
        </Marker>
      </Map>
    </div>
  );
};

export default MapPanel;

MapPanel.propTypes = {
  point: PropTypes.array.isRequired,
};
