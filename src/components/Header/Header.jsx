import React from "react";
import Input from "../ReusableUI/Input/Input";
import "./Header.css";
import { SearchIcon } from "../../assets/Icons/SearchIcon";
import { HeaderToggle } from "../../assets/Icons/HeaderToggle";

const Header = ({ toggleFilters }) => {
  return (
    <div className="header">
      <div className="menu" onClick={toggleFilters}>
        <HeaderToggle />
      </div>
      <Input
        placeholder="Search products..."
        className={"header-search"}
        icon={<SearchIcon />}
      />
      <div className="icons">🛒 👤</div>
    </div>
  );
};

export default Header;
