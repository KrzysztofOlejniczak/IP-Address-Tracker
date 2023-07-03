import React from "react";
import style from "./SearchForm.module.css";
import SearchIcon from "../../images/icon-arrow.svg";

const SearchForm = () => {
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type="text"
        id="ip"
        name="ip"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className={style.btn}>
        <img src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;
