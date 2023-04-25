export default function Button(props) {
  const variants = {
    small: "px-10 py-[18px] text-lg ",
    large: "px-[60px] py-[30px] font-medium text-2xl",
  };
  const piokedVariant = variants[props.variant];
  return (
    <button
      className={`font-rubik hover:text-primary text-white bg-primary rounded-[10px] border border-primary hover:bg-transparent  ${piokedVariant}`}
    >
      {props.children}
    </button>
  );
}
