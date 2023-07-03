import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>IP Address Tracker</h1>
    </header>
  );
};

export default Header;
