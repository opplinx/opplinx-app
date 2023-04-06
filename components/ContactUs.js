import styles from "../src/styles/ContactUs.module.css";
import Image from "next/image";

function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
      <header className={styles.contactUsHeader}>Contact Us</header>
      <div className={styles.contactMethods}>
        <div className={styles.contactMethod}>
          <Image
            className={styles.imageAddress}
            height="21"
            width="21"
            src="/address-1.png"
            alt="i"
          />
          &nbsp;215 Park Ave S 11th floor, New York, NY 10003
        </div>
        <div className={styles.contactMethod}>
          <Image height="15" width="21" src="/email-1.png" alt="i" />
          &nbsp;hello@opplinx.com
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <form
          action="https://formsubmit.co/hello@opplinx.com"
          method="POST"
          className={styles.contactForm}
        >
          <div className={styles.formTextBoxesContainer}>
            <input
              className={styles.formFlexItem}
              type="text"
              placeholder="First Name"
              name="first-name"
            />
            <input
              className={styles.formFlexItem}
              type="text"
              placeholder="Last Name"
              name="last-name"
            />
            <input
              className={styles.formFlexItem}
              type="text"
              placeholder="Phone Number"
              name="phone-number"
            />
            <input
              className={styles.formFlexItem}
              type="text"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className={styles.formMessageAndSubmit}>
            <textarea type="text" placeholder="Message" name="message" />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
