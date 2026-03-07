import React from "react";
import Input from "../ReusableUI/Input/Input";
import cartIcon from "../../assets/Icons/icon-cart.svg";
import searchIcon from "../../assets/Icons/icon-search.svg";
import headerToggleIcon from "../../assets/Icons/icon-header-toggle.svg";
import "./Header.css";

const Header = ({ toggleFilters }) => {
  return (
    <div className="header">
      <div className="menu" onClick={toggleFilters}>
        <div className="icons">
          <img src={headerToggleIcon} />
        </div>
      </div>
      <Input
        placeholder="Search products..."
        className={"header-search"}
        icon={searchIcon}
      />
      <div className="icons">
        <img src={cartIcon} />
      </div>
    </div>
  );
};

export default Header;
