import React from "react";
import style from "./SearchForm.module.css";
import SearchIcon from "../../images/icon-arrow.svg";
import PropTypes from "prop-types";

const SearchForm = ({ submit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(event.target.ip.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
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

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
