import React from "react";
import style from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";
import PropTypes from "prop-types";

const Header = ({ submit }) => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>IP Address Tracker</h1>
      <SearchForm submit={submit} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  submit: PropTypes.func.isRequired,
};
