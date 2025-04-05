//region data types
type ButtonProps = {
  text: string;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  type: "primary" | "secondary" | "dashboard";
};
//endregion

function Button({ text, onClick, rightIcon, leftIcon, type }: ButtonProps) {
  //region function
  function handleButtonColor(): string {
    switch (type) {
      case "primary":
        return "bg-primary text-white";

      case "secondary":
        return "text-link";

      case "dashboard":
        return "text-text1";
    }
  }
  //endregion
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer gap-1  px-6 py-2 text-base rounded-md ${handleButtonColor()}`}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
}

export default Button;
