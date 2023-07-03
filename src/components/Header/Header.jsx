import React from "react";
import style from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>IP Address Tracker</h1>
      <SearchForm />
    </header>
  );
};

export default Header;
