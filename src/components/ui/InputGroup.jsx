const InputGroup = (props) => {
  const label = props.label;
  const type = props.type || "text";
  const placeholder = props.placeholder || "Type here";

  const size = {
    "extra-small": "input-xs",
    small: "input-sm",
    normal: "input-md",
    large: "input-xl",
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs ${
          size[props.size] ?? size["normal"]
        }`}
      />
    </div>
  );
};

export default InputGroup;
