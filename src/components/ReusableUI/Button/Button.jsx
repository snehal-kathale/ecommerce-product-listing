import "./Button.css";

const Button = ({
  title,
  onClick,
  disabled,
  icon,
  variant = "outline",
  active,
}) => {
  return (
    <button
      className={`btn btn-${variant} ${active ? "active" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="icon">
          <img src={icon} />
        </span>
      )}
      {title}
    </button>
  );
};

export default Button;
