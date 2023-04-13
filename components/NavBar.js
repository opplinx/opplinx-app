import { navVariants } from "../motion/variants";
import { motion } from "framer-motion";
import Link from "next/link";

function NavBar() {
  const handleMobileMenuClick = (e) => {
    const mobileMenu = document.querySelector(".mobileMenu");
    const menuItemsList = document.querySelector(".menuItemsList");
    mobileMenu.classList.toggle("active");
    menuItemsList.classList.toggle("active");
  };

  return (
    <div className="navBar">
      <motion.div
        className="contentContainer"
        initial="hidden"
        animate="visible"
        variants={navVariants(0.25)}
      >
        <Link href="/">
          <img
            width="240"
            height="50"
            src="logo-white.png"
            className="logo"
            alt="hero"
          ></img>
        </Link>
        <ul className="menuItemsList">
          <li>
            <Link className="menuItem" href="#choose" scroll={false}>
              Why Choose OppLinx?
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="#recruit" scroll={false}>
              Recruitment
            </Link>
          </li>
          <li>
            <Link className="menuItem" href="#contact" scroll={false}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="mobileMenu" onClick={handleMobileMenuClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </motion.div>
    </div>
  );
}
export default NavBar;
