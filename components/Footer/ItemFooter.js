export default function ItemFooter(props) {
  return (
    <div>
      <h4 className="text-[15px] uppercase text-white font-semibold">
        {props.title}
      </h4>
      <ul className="space-y-4 mt-[22px]">{props.children}</ul>
    </div>
  );
}
