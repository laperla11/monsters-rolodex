import React from "react";
import "./search-box.style.css";

const SearchBox = ({ placeholder, handleChange }) => (
  
  <input className="pearch" type="search" placeholder={placeholder} onChange={e => handleChange(e.target.value)} />
  
    
);

export default SearchBox;
