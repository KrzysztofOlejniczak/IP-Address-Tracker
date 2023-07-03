import React from "react";
import style from "./DataPanel.module.css";
import PropTypes from "prop-types";

const DataPanel = ({ ip, location, isp }) => {
  return (
    <div className={style.box}>
      <ul className={style.list}>
        <li className={style.item}>
          <p className={style.title}>IP address</p>
          <p className={style.value}>{ip}</p>
        </li>
        <li className={style.item}>
          <p className={style.title}>Location</p>
          <p className={style.value}>
            {location.city}, {location.country} {location.postalcode}
          </p>
        </li>
        <li className={style.item}>
          <p className={style.title}>Timezone</p>
          <p className={style.value}>UTC {location.timezone}</p>
        </li>
        <li className={style.item}>
          <p className={style.title}>ISP</p>
          <p className={style.value}>{isp}</p>
        </li>
      </ul>
    </div>
  );
};

export default DataPanel;

DataPanel.propTypes = {
  ip: PropTypes.string.isRequired,
  isp: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
