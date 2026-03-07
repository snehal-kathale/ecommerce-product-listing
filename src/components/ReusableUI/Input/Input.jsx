import "./Input.css";

const Input = ({
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
  className,
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
