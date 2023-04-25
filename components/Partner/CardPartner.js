import Image from "next/image";

export default function CardPartner(props) {
  return (
    <div className="rounded-[20px] min-w-[230px] min-h-[143px] grid place-items-center bg-white shadow-[0px_4px_40px_0_rgba(91,33,182,0.19)]">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}
