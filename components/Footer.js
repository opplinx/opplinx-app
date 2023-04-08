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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
