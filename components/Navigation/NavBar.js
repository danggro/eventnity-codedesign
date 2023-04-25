import { useEffect } from "react";
import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  useEffect(() => {
    const nav = document.getElementById("navigation");
    const hero = document.getElementById("hero");

    window.onscroll = () => {
      if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add("fixed-nav");
        hero.classList.add("mt-[140px]");
      } else {
        hero.classList.remove("mt-[140px]");
        nav.classList.remove("fixed-nav");
      }
    };
  }, []);

  return (
    <nav className="pt-[46px] transition-all" id="navigation">
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />
          <div className="flex items-center gap-[98px]">
            <NavLink />
            <NavRight />
          </div>
        </div>
      </Container>
    </nav>
  );
}
