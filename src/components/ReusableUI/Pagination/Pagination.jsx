import "./Pagination.css";
import Button from "../Button/Button";

function Pagination({ page, totalPages, onPageChange }) {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (page <= 10) {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }
    pages.push(1);
    if (page > 3) {
      pages.push("...");
    }
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };
  const pages = getPages();

  return (
    <div className="pagination">
      <Button
        title="Previous"
        icon="←"
        variant="outline"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <Button
            key={p}
            title={p}
            variant="pagination"
            active={page === p}
            onClick={() => onPageChange(p)}
          />
        ),
      )}

      <Button
        title="Next"
        icon="→"
        variant="outline"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      />
    </div>
  );
}

export default Pagination;
