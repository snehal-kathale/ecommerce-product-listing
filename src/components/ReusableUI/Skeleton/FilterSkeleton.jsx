import "./FilterSkeleton.css";

const FiltersSkeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-input search" />

      <div className="filter-section">
        <div className="skeleton-title" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-checkbox-row">
            <div className="skeleton-box" />
            <div className="skeleton-text" />
          </div>
        ))}
      </div>

      <div className="filter-section">
        <div className="skeleton-title" />
        <div className="price-range">
          <div className="skeleton-input" />
          <div className="skeleton-input" />
        </div>
        <div className="skeleton-btn" />
      </div>

      <div className="filter-section">
        <div className="skeleton-title" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-checkbox-row">
            <div className="skeleton-box" />
            <div className="skeleton-text" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersSkeleton;
