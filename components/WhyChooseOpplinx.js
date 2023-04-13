import Image from "next/image";
import { useEffect } from "react";

function WhyChooseOpplinx() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".hidden-left, .hidden-right"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className="whyContainer">
      <header className="whyHeader">Why Choose OppLinx?</header>
      <ul className="bullets">
        <li>
          <div className="arrowHeading hidden-left">
            <Image height="20" width="20" src="/arrow-1.png" alt="i" />
            <em>&nbsp;ReactJS &nbsp;Expertise</em>
          </div>
          <strong>-------</strong>
          <div className="why-text hidden-right">
            Our recruitment professionals possess a deep understanding of the
            ReactJS landscape, allowing us to identify and attract top talent
            with ease.
          </div>
        </li>
        <li>
          <div className="arrowHeading hidden-left">
            <Image height="20" width="20" src="/arrow-1.png" alt="i" />
            <em>&nbsp;Tailored &nbsp;Solutions</em>
          </div>
          <strong>-------</strong>
          <div className="why-text hidden-right">
            We recognize that every organization is different, and we strive to
            provide customized talent solutions that cater to your specific
            needs and objectives.
          </div>
        </li>
        <li>
          <div className="arrowHeading hidden-left">
            <Image height="20" width="20" src="/arrow-1.png" alt="i" />
            <em>&nbsp;Streamlined &nbsp;Process</em>
          </div>
          <strong>-------</strong>
          <div className="why-text hidden-right">
            Our efficient recruitment process saves you time and resources,
            enabling you to focus on what matters most – driving your business
            forward.
          </div>
        </li>
        <li>
          <div className="arrowHeading hidden-left">
            <Image height="20" width="20" src="/arrow-1.png" alt="i" />
            <em>&nbsp;Lasting &nbsp;Partnerships</em>
          </div>
          <strong>-------</strong>
          <div className="why-text hidden-right">
            We&apos;re committed to building long-term relationships with our
            clients, ensuring that we&apos;re always there to support your
            evolving talent needs.
          </div>
        </li>
        <li>
          <div className="arrowHeading hidden-left">
            <Image height="20" width="20" src="/arrow-1.png" alt="i" />
            <em>&nbsp;Guaranteed &nbsp;Satisfaction</em>
          </div>
          <strong>-------</strong>
          <div className="why-text hidden-right">
            At OppLinx, we&apos;re confident in our ability to deliver
            exceptional ReactJS developers. If you&apos;re not fully satisfied,
            we&apos;ll work diligently to make things right.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WhyChooseOpplinx;
