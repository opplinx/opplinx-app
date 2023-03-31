import styles from "../src/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img width="220" height="50" src="Logo-black.png" />
      </div>
      <div className={styles.footerMotto}>
        Linking Opportunities with Careers
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>company</h4>
            <ul className={styles.ul}>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>follow us</h4>
            <div className={styles.socialLinks}>
              <a href="#">
                <img
                  className={styles.socialIcon}
                  height="20"
                  width="20"
                  src="facebook-f.svg"
                ></img>
              </a>
              <a href="#">
                <img height="20" width="20" src="twitter.svg"></img>
              </a>
              <a href="#">
                <img height="20" width="20" src="instagram.svg"></img>
              </a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1421178443966!2d-73.99064578507925!3d40.73689824402978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1f1265c5b%3A0xe0b2579db2abce55!2s215%20Park%20Avenue%20South!5e0!3m2!1sen!2sus!4v1680213123088!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0, paddingRight: 50 }}
              //   allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
