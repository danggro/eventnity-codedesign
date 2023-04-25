import Container from "../Container";
import CardPartner from "./CardPartner";
import Universal from "@/public/partner/Universal.png";
import BD from "@/public/partner/BD.png";
import Hulu from "@/public/partner/Hulu.png";
import Canva from "@/public/partner/Canva.png";
import CocaCola from "@/public/partner/CocaCola.png";
import Spotify from "@/public/partner/Spotify.png";
import Genpact from "@/public/partner/Genpact.png";
import Tiktok from "@/public/partner/Tiktok.png";
import Button from "../Button";

export default function SectionPartner() {
  return (
    <section className="mb-[115px]">
      <Container>
        <h2 className="text-center font-medium font-rubik text-[75px] ">
          Client Partner
        </h2>
        <div className="mt-20 flex flex-wrap gap-x-[92px] justify-between gap-y-16">
          <CardPartner src={Universal} alt="Universal" />
          <CardPartner src={BD} alt="BD" />
          <CardPartner src={Hulu} alt="Hulu" />
          <CardPartner src={Canva} alt="Canva" />
          <CardPartner src={CocaCola} alt="CocaCola" />
          <CardPartner src={Spotify} alt="Spotify" />
          <CardPartner src={Genpact} alt="Genpact" />
          <CardPartner src={Tiktok} alt="Tiktok" />
        </div>
        <div className="mt-20 text-center">
          <Button variant="large">All Client Partner</Button>
        </div>
      </Container>
    </section>
  );
}
