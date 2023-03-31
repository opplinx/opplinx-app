import styles from "../src/styles/WhyChooseOpplinx.module.css";

function WhyChooseOpplinx() {
  return (
    <div className={styles.whyContainer}>
      <header className={styles.whyHeader}>Why Choose OppLinx?</header>
      <ul className={styles.bullets}>
        <li>
          <div className={styles.arrowHeading}>
            <img height="20" width="20" src="/arrow-1.png" />
            <em>&nbsp;ReactJS &nbsp;Expertise</em>
          </div>
          <strong>-------</strong>
          Our recruitment professionals possess a deep understanding of the
          ReactJS landscape, allowing us to identify and attract top talent with
          ease.
        </li>
        <li>
          <div className={styles.arrowHeading}>
            <img height="20" width="20" src="/arrow-1.png" />
            <em>&nbsp;Tailored &nbsp;Solutions</em>
          </div>
          <strong>-------</strong>We recognize that every organization is
          different, and we strive to provide customized talent solutions that
          cater to your specific needs and objectives.
        </li>
        <li>
          <div className={styles.arrowHeading}>
            <img height="20" width="20" src="/arrow-1.png" />
            <em>&nbsp;Streamlined &nbsp;Process</em>
          </div>
          <strong>-------</strong>Our efficient recruitment process saves you
          time and resources, enabling you to focus on what matters most –
          driving your business forward.
        </li>
        <li>
          <div className={styles.arrowHeading}>
            <img height="20" width="20" src="/arrow-1.png" />
            <em>&nbsp;Lasting &nbsp;Partnerships</em>
          </div>
          <strong>-------</strong>We're committed to building long-term
          relationships with our clients, ensuring that we're always there to
          support your evolving talent needs.
        </li>
        <li>
          <div className={styles.arrowHeading}>
            <img height="20" width="20" src="/arrow-1.png" />
            <em>&nbsp;Guaranteed &nbsp;Satisfaction</em>
          </div>
          <strong>-------</strong>At OppLinx, we're confident in our ability to
          deliver exceptional ReactJS developers. If you're not fully satisfied,
          we'll work diligently to make things right.
        </li>
      </ul>
    </div>
  );
}

export default WhyChooseOpplinx;
