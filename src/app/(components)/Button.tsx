//region data types
type ButtonProps = {
  text: string;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  type: "primary" | "secondary";
};
//endregion

function Button({ text, onClick, rightIcon, leftIcon, type }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` flex items-center gap-1  px-6 py-2 text-xl rounded-md ${type === "primary" ? "bg-primary text-white" : "text-link"}`}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
}

export default Button;
