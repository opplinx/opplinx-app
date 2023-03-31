import Head from "next/head";
import Image from "next/image";
// import { Link } from "react-scroll";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import RecruitmentProcess from "../../components/RecruitmentProcess.js";
import Transition from "../../components/Transition.js";
import WhyChooseOpplinx from "../../components/WhyChooseOpplinx.js";
import Testimonials from "../../components/Testimonials.js";
import ContactUs from "../../components/ContactUs.js";
import Footer from "../../components/Footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>OppLinx</title>
        <meta name="description" content="ReactJS recruitment agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="outer">
        <div id={styles.topBar}>
          <div className={styles.container}>
            <div>
              <Link href="/">
                <img
                  width="240"
                  height="50"
                  src="logo-white.png"
                  id={styles.logo}
                  alt="hero"
                ></img>
              </Link>
            </div>
            <div className={styles.topBarNav}>
              <div className={styles.menuItems}>
                <ul className={styles.menuItemsList}>
                  <li>
                    <Link
                      className={styles.menuItem}
                      href="#choose"
                      scroll={false}
                    >
                      Why Choose OppLinx?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.menuItem}
                      href="#recruit"
                      scroll={false}
                    >
                      Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.menuItem}
                      href="/ContactUs"
                      scroll={false}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div id="mobile-menu--btn"></div>
            </div>
          </div>
        </div>
        <div className={styles.heroContainer}>
          <Image
            className={styles.ny}
            height="750"
            width="1200"
            src="/brooklyn.jpg"
            alt="ny"
          ></Image>
          <div className="">
            <div className={styles.heroText}>
              Linking Opportunities with Careers
            </div>
            <div className={styles.heroTextSub}>
              Leading React JS and Full Stack Developer Recruitment Agency
            </div>
          </div>
        </div>
        <Transition />
        <div id="choose"></div>
        <WhyChooseOpplinx />
        <div id="recruit"></div>
        <RecruitmentProcess />
        <Testimonials />
        <div id="contact"></div>
        <ContactUs />
        <br />
        <Footer />
      </div>
    </>
  );
}
