import Image from "next/image";
import Container from "../Container";
import Appstore from "@/public/footer/Appstore.png";
import Playstore from "@/public/footer/Playstore.png";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";
import ItemIcon from "./ItemIcon";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Twitter from "./Icon/Twitter";
import Linkedin from "./Icon/Linkedin";
import Youtube from "./Icon/Youtube";

export default function Footer() {
  return (
    <footer className="mb-20">
      <Container>
        <div className="bg-[#171717] rounded-[40px] px-[155px] py-[84px]">
          <div className="flex justify-between gap-[195px] mb-[100px]">
            <div className="flex-shrink-0">
              <div className="mb-10 text-white font-fredoka">
                <h4 className=" text-[32px] font-semibold">Eventnity.</h4>
                <p className="font-medium text-[15px] mt-2">
                  Ease of being together
                </p>
              </div>
              <div className="gap-y-[15px] flex flex-col">
                <button>
                  <Image src={Appstore} alt="Appstore" />
                </button>
                <button>
                  <Image src={Playstore} alt="Playstore" />
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <ItemFooter title="eventnity">
                <LinkFooter href="/">Start For Free</LinkFooter>
                <LinkFooter href="/">Login</LinkFooter>
                <LinkFooter href="/">Pricing</LinkFooter>
              </ItemFooter>
              <ItemFooter title="features">
                <LinkFooter href="/">Payment Integration</LinkFooter>
                <LinkFooter href="/">Newslatter</LinkFooter>
                <LinkFooter href="/">Email Marketing</LinkFooter>
                <LinkFooter href="/">QR Code Ticketing</LinkFooter>
                <LinkFooter href="/">Event Hosting</LinkFooter>
                <LinkFooter href="/">Promote</LinkFooter>
                <LinkFooter href="/">Advertising</LinkFooter>
              </ItemFooter>
              <ItemFooter title="company">
                <LinkFooter href="/">For Bussines</LinkFooter>
                <LinkFooter href="/">About Us</LinkFooter>
                <LinkFooter href="/">Blog</LinkFooter>
                <LinkFooter href="/">Career</LinkFooter>
                <LinkFooter href="/">Event</LinkFooter>
              </ItemFooter>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex gap-5">
                <ItemIcon>
                  <Facebook />
                </ItemIcon>
                <ItemIcon>
                  <Instagram />
                </ItemIcon>
                <ItemIcon>
                  <Twitter />
                </ItemIcon>
                <ItemIcon>
                  <Linkedin />
                </ItemIcon>
                <ItemIcon>
                  <Youtube />
                </ItemIcon>
              </div>
              <ul className="flex gap-4">
                <LinkFooter href="/">Terms of Service</LinkFooter>
                <LinkFooter href="/">Privacy</LinkFooter>
                <LinkFooter href="/">Return and Refund</LinkFooter>
              </ul>
            </div>
            <p className="text-xs font-medium text-gray-300">
              Copyright &copy; 2023
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
