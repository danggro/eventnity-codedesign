import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import About from "@/public/About.png";

export default function SectionAbout() {
  return (
    <section className="mb-[109px]">
      <Container>
        <div className="flex">
          <div className="w-6/12">
            <h2 className="text-[64px] font-semibold font-rubik">
              About Eventnity
            </h2>
            <p className="mb-24 text-28 mt-9 pr-14">
              Evenity is event management expertise that helps and facilitates
              Event Planners in achieving the goal of carrying out an event.
            </p>
            <Button variant="large">More About Us</Button>
          </div>
          <div className="relative flex justify-end w-6/12">
            <Image src={About} alt="About" />
            <div className="px-[30px] py-5 rounded-[30px] shadow-[0px_4px_40px_0_rgba(91,33,182,0.19)] absolute bottom-[77px] left-[102px] bg-white text-center">
              <h2 className="font-rubik text-[64px] font-medium">46+</h2>
              <p className="font-medium text-gray-600">
                Events In The Last Year
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
