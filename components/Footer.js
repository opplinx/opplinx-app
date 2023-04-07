import styles from "../src/styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image width="220" height="50" src="/Logo-black.png" alt="i" />
      </div>
      <div className={styles.footerMotto}>
        Linking Opportunities with Careers
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>follow us</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/company/opplinx/about/"
                target="_blank"
              >
                <Image
                  className={styles.socialIcon}
                  height="50"
                  width="50"
                  src="/linkedin-90.png"
                  alt="i"
                />
              </a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1421178443966!2d-73.99064578507925!3d40.73689824402978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1f1265c5b%3A0xe0b2579db2abce55!2s215%20Park%20Avenue%20South!5e0!3m2!1sen!2sus!4v1680213123088!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0, paddingRight: 50 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
