import styles from "../src/styles/WhyChooseOpplinx.module.css";

function WhyChooseOpplinx() {
  return (
    <div className={styles.whyContainer}>
      <header className={styles.whyHeader}>Why Choose OppLinx?</header>
      <ul className={styles.bullets}>
        <li>
          <em>ReactJS Expertise</em>
          <strong>-------</strong>
          Our recruitment professionals possess a deep understanding of the
          ReactJS landscape, allowing us to identify and attract top talent with
          ease.
        </li>
        <li>
          <em>Tailored Solutions</em>
          <strong>-------</strong>We recognize that every organization is
          different, and we strive to provide customized talent solutions that
          cater to your specific needs and objectives.
        </li>
        <li>
          <em>Streamlined Process</em>
          <strong>-------</strong>Our efficient recruitment process saves you
          time and resources, enabling you to focus on what matters most –
          driving your business forward.
        </li>
        <li>
          <em>Lasting Partnerships</em>
          <strong>-------</strong>We're committed to building long-term
          relationships with our clients, ensuring that we're always there to
          support your evolving talent needs.
        </li>
        <li>
          <em>Guaranteed Satisfaction</em>
          <strong>-------</strong>At OppLinx, we're confident in our ability to
          deliver exceptional ReactJS developers. If you're not fully satisfied,
          we'll work diligently to make things right.
        </li>
      </ul>
    </div>
  );
}

export default WhyChooseOpplinx;
