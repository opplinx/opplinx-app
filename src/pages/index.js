import Head from "next/head";
import styles from "@/styles/Home.module.css";
import RecruitmentProcess from "../../components/RecruitmentProcess.js";
import WhyChooseOpplinx from "../../components/WhyChooseOpplinx.js";
import Testimonials from "../../components/Testimonials.js";
import ContactUs from "../../components/ContactUs.js";
import Footer from "../../components/Footer.js";
import Location from "../../components/Location.js";
import NavBar from "../../components/NavBar.js";
import Hero from "../../components/Hero.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>OppLinx</title>
        <meta name="description" content="ReactJS recruitment agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="outer">
        <NavBar />
        <Hero />
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
