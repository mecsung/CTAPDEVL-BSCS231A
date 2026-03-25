import "../index.css";

const InputField = ({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange, 
    required = false,
}) => {
    <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <input 
            className="input-field"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
}

export default InputField;