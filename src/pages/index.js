import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import RecruitmentProcess from "../../components/RecruitmentProcess.js";
import Transition from "../../components/Transition.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>OppLinx</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="outer">
        <div id={styles.topBar}>
          <div className={styles.container}>
            <div>
              <Link href="/">
                <img
                  width="220"
                  height="50"
                  src="Logo-black.png"
                  id={styles.logo}
                  alt="hero"
                ></img>
              </Link>
            </div>
            <div className={styles.topBarNav}>
              <div className="menu-primary-menu-new-container">
                <ul id="menu-primary-menu-new-1" className="menu">
                  <li className="menu-item">
                    <Link href="/">item 1</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/">item 2</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/">item 3</Link>
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
        <RecruitmentProcess />
      </div>
    </>
  );
}
