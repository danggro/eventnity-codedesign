import Image from "next/image";
import Container from "../Container";
import Left from "@/public/venue/Left.png";
import Right from "@/public/venue/Right.png";
import Icon from "./Icon";

export default function SectionVenue() {
  return (
    <section className="mb-[127px]">
      <Container>
        <div className="flex">
          <div className="w-6/12">
            <h1 className="font-semibold font-rubik text-[96px] mb-[14px]">
              Explore Beautiful Venues
            </h1>
            <div className="relative">
              <Image src={Left} alt="left" />
              <div className="px-10 py-[30px] font-rubik rounded-[30px] shadow-[0px_4px_40px_0_rgba(91,33,182,0.19)] absolute bottom-[88px] left-[318px] bg-white">
                <p className="text-xl font-medium text-gray-500">VENUE 2</p>
                <h4 className="mt-5 text-2xl font-medium text-gray-800 mb-7">
                  KEMPINSKI <br /> HOTEL INDONESIA
                </h4>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-gray-500">
                    Jakarta, Indonesia
                  </p>
                  <Icon />
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 pt-[185px] ">
            <div className="relative flex justify-end">
              <Image src={Right} alt="left" />
              <div className="px-10 py-[30px] font-rubik rounded-[30px] shadow-[0px_4px_40px_0_rgba(91,33,182,0.19)] absolute top-[133px] -left-[44px] bg-white">
                <p className="text-xl font-medium text-gray-500">VENUE 1</p>
                <h4 className="mt-5 text-2xl font-medium text-gray-800 mb-7">
                  REGALE <br /> CONVENTION HALL
                </h4>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-gray-500">
                    North Sumatera, Indonesia
                  </p>
                  <Icon />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-[66px]">
              <p className="text-28 max-w-[438px] leading-[39px]">
                Explore new ideas at astoundingly beautiful venues. Attend Tech
                Startup Conferences and meet new brilliant minds from all over
                the world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
