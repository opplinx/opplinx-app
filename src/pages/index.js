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
import Location from "../../components/Location.js";

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
          <video
            height="400"
            width="400"
            src="/computer-video-2.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay
          ></video>
          <div className={styles.heroTextContainer}>
            <div className={styles.heroText1}>
              Linking Opportunities with Careers
            </div>
            <div className={styles.heroText2}>
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
        <Location />
      </div>
    </>
  );
}
