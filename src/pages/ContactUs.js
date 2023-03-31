import ContactUs from "../../components/ContactUs.js";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="contact" conent="contact opplinx" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ContactUs />
    </>
  );
}
