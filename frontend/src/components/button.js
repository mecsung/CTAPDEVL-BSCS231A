import "./button.css";

const Button = ({ children, variant = "primary", onClick, type = "button" }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
