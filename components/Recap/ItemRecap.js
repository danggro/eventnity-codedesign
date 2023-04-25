export default function ItemRecap(props) {
  return (
    <div className="rounded-[20px] min-w-[228px] px-[70px] py-9 shadow-[0px_4px_40px_0_rgba(91,33,182,0.19)] bg-white text-center">
      <h2 className="font-extrabold text-[72px]">{props.title}</h2>
      <p className="mt-5 text-2xl font-extrabold text-gray-500">{props.ket}</p>
    </div>
  );
}
