import SectionAbout from "@/components/About/SectionAbout";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionPartner from "@/components/Partner/SectionPartner";
import SectionRecap from "@/components/Recap/SectionRecap";
import SectionSchedule from "@/components/Schedule/SectionSchedule";
import SectionVenue from "@/components/Venue/SectionVenue";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eventnity | Ticketing Website</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionAbout />
      <SectionVenue />
      <SectionRecap />
      <SectionSchedule />
      <SectionPartner />
      <Footer />
    </>
  );
}
