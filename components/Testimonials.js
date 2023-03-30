import styles from "../src/styles/Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testimonialsSectionContainer}>
      <header className={styles.testimonialsHeader}>Testimonials</header>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text{" "}
        </div>
        <div className={styles.testimonial}>
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text{" "}
        </div>
        <div className={styles.testimonial}>
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text sample text sample text sample text sample text sample
          text sample text sample text sample text sample text sample text
          sample text{" "}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
