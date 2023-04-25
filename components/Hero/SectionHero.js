import Container from "../Container";
import HeroPic from "../../public/Hero.png";
import Button from "../Button";

export default function SectionHero() {
  return (
    <section className="relative mt-[37px] mb-[222px]" id="hero">
      <Container>
        <div
          className="rounded-[40px]  overflow-hidden"
          style={{
            backgroundImage: `url(/Hero.png)`,
            // backgroundColor: "black",
            backgroundSize: "cover",
            height: "695px",
          }}
        >
          <div className="h-full hero-gdr pt-[120px] pl-[52px]">
            <div className="w-7/12">
              <span className="flex gap-2">
                <p className="text-xl font-medium text-white">
                  Welcome to our ticketing website!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="#fff"
                    d="M3 9a3 3 0 013-3h18a3 3 0 013 3v3a3 3 0 100 6v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3a3 3 0 100-6V9z"
                  ></path>
                </svg>
              </span>
              <h1 className="text-white my-8 font-black text-[72px] leading-[72px]">
                Where Your <span className="event">Event</span> Dreams Come to
                Life!
              </h1>
              <p className="font-semibold text-lg leading-[28px] text-white pr-20">
                Not only can you purchase tickets to the hottest events in town,
                but you can also create your own custom tickets with our
                easy-to-use platform. Say goodbye to generic tickets and hello
                to personalized and professional-looking ones that will make
                your event stand out from the rest.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute rounded-[10px] bg-primary/40 backdrop-blur-sm bottom-0 left-[50%] -translate-x-[50%] translate-y-[49%]">
          <Button variant="large">Explore Event</Button>
        </div>
      </Container>
    </section>
  );
}
