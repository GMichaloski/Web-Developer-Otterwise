import "./Button.css";

const Button = (props) => {
  const { children, variant, isLoading, disabled, blue, pink, ...rest } = props;

  console.log(rest); // {onClick:function}

  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant}`}
      colorScheme={blue || pink}
      {...rest} //onClick = {onClick}
    >
      {isLoading ? "carregando..." : children}
    </button>
  );
};

export default Button;
