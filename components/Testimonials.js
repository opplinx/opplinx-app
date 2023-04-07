import styles from "../src/styles/Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testimonialsSectionContainer}>
      <header className={styles.testimonialsHeader}>Testimonials</header>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
          <q>
            Opplinx&apos;s dedication to understanding my career goals and
            technical background was outstanding. They found me the perfect
            opportunity and I couldn&apos;t be happier with my new role.
          </q>
          {"  "}
          <span>- Chris B.</span>
        </div>
        <div className={styles.testimonial}>
          <q>
            Opplinx made a huge difference in my job search! Their expertise in
            the tech industry helped me land the perfect position that matched
            my skill set. I can&apos;t recommend them enough!
          </q>
          {"  "}
          <span>- Chase Y.</span>
        </div>
        <div className={styles.testimonial}>
          <q>
            The team at Opplinx really knows what they are doing! They matched
            me with an amazing company where I could showcase my abilities and
            contribute to meaningful projects. Highly recommended for developers
            in search of their next big break!
          </q>
          {"  "}
          <span>- Warren W.</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
