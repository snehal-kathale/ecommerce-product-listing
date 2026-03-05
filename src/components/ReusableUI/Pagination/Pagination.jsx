import "./Pagination.css";
import Button from "../Button/Button";

function Pagination({ page, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <Button
        title="Previous"
        icon="←"
        variant="outline"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />

      {pages.map((p) => (
        <Button
          key={p}
          title={p}
          variant="pagination"
          active={page === p}
          onClick={() => onPageChange(p)}
        />
      ))}

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
