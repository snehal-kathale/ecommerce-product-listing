import { useState } from "react";
import Button from "../ReusableUI/Button/Button";
import Input from "../ReusableUI/Input/Input";
import Checkbox from "../ReusableUI/Checkbox/Checkbox";
import searchIcon from "../../assets/Icons/icon-search.svg";
import "./Filters.css";

const Filters = ({
  categories,
  brands,
  filters,
  setFilters,
  applyPriceFilter,
}) => {
  const [priceInput, setPriceInput] = useState({
    min: filters.minPrice || "",
    max: filters.maxPrice || "",
  });
  const selectCategory = (category) => {
    setFilters({
      ...filters,
      brands: [],
      category: filters.category === category ? "" : category,
    });
  };

  const brandChecked = (brand) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];

    setFilters({
      ...filters,
      brands: updated,
    });
  };

  const handlePriceChange = (field, value) => {
    if (Number.isFinite(+value)) {
      setPriceInput((prevState) => ({ ...prevState, [field]: value }));
    }
  };

  return (
    <div className="filtersPanel">
      <Input
        placeholder="Search..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className={"search"}
        icon={searchIcon}
      />

      <div className="filter-section">
        <h3>Categories</h3>

        {categories.map((cat) => (
          <Checkbox
            key={cat.slug}
            label={cat.name}
            checked={filters.category === cat.slug}
            onChange={() => selectCategory(cat.slug)}
          />
        ))}
      </div>

      <div className="filter-section">
        <h3>Price Range</h3>

        <div className="price-range">
          <Input
            placeholder="Min"
            value={priceInput.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
          />

          <Input
            placeholder="Max"
            value={priceInput.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </div>

        <Button
          title="Apply"
          variant="primary"
          className="apply-btn"
          onClick={() => applyPriceFilter(priceInput.min, priceInput.max)}
        />
      </div>

      <div className="filter-section">
        <h3>Brands</h3>
        {!filters.category ? (
          <p className="noBrands">Please select a category first!</p>
        ) : brands.length === 0 ? (
          <p className="noBrands">No brands found for this category</p>
        ) : (
          brands.map((brand) => (
            <Checkbox
              key={brand}
              label={brand}
              checked={filters.brands.includes(brand)}
              onChange={() => brandChecked(brand)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Filters;
