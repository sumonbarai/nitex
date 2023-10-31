const Button = (props) => {
  const variant = {
    basic: `btn-primary hover:border-primary`,
    outline: `btn-secondary bg-white hover:border-secondary`,
  };

  const size = {
    "extra-small": `btn-xs`,
    small: `btn-sm`,
    normal: "",
    large: "btn-lg",
  };

  return (
    <button
      className={`btn hover:text-white hover:bg-secondary ${
        variant[props.variant] ?? variant["basic"]
      } ${size[props.size] ?? size["normal"]}`}
      type={props.type ?? "button"}
      onClick={props.onClick ?? null}
    >
      {props.text}
    </button>
  );
};

export default Button;
