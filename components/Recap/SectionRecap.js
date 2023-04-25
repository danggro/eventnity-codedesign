import Image from "next/image";
import Container from "../Container";
import RecapPic from "@/public/Recap.png";
import ItemRecap from "./ItemRecap";

export default function SectionRecap() {
  return (
    <section className="mb-[160px]">
      <Container>
        <h1 className="text-center font-fredoka font-semibold text-[64px] mb-[57px]">
          RECAP EVENT 2022
        </h1>
        <Image src={RecapPic} alt="Recap" />
        <div className="flex mt-[121px] justify-between">
          <ItemRecap title="23" ket="DAYS" />
          <ItemRecap title="09" ket="HOURS" />
          <ItemRecap title="17" ket="MINUTES" />
          <ItemRecap title="03" ket="SECONDS" />
        </div>
      </Container>
    </section>
  );
}
