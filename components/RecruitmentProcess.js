import styles from "../src/styles/RecruitmentProcess.module.css";
import { useState } from "react";

function RecruitmentProcess() {
  const [recSection, setRecSection] = useState("intake");

  function displaySection() {
    if (recSection === "intake") {
      return (
        <div>
          Understand needs such as qualifications, compensation range,
          background, experience, and location requirements. <br />
          Understand your interview process: are there any technical or
          personality tests involved? Who is the hiring manager? How many steps
          are in the interview cycle?
        </div>
      );
    }
    if (recSection === "start") {
      return (
        <div>
          Use our proprietary database to look for candidates that matches your
          criteria. <br /> Review resumes with a focus on programming languages,
          frameworks, libraries, and other development tools relevant to the
          clients&apos; needs.
        </div>
      );
    }
    if (recSection === "submit") {
      return (
        <div>
          Submit candidates to the client based on their technical skills,
          development experience, and cultural fit within the organization,
          ensuring a successful placement. <br /> Keep submitting candidates
          until an offer is made.
        </div>
      );
    }
    if (recSection === "present") {
      return (
        <div>
          Assist in negotiating job offers, including salary, benefits, and
          other employment terms, to ensure a mutually beneficial agreement
          between the candidate and the employer.
        </div>
      );
    }
    if (recSection === "onboarding") {
      return (
        <div>
          Provide support during the onboarding process, ensuring a smooth
          transition for both the candidate and the employer.
        </div>
      );
    }
    if (recSection === "post") {
      return (
        <div>
          Conduct 30, 60, and 90-day check-ins with both the candidate and the
          employer, addressing any concerns or issues that arise after placement
          to ensure long-term success.
        </div>
      );
    }
  }

  const handleClick = (event) => {
    setRecSection(event.target.id);
  };

  return (
    <div className={styles.infoContainer}>
      <div className="info-left">
        Our Recruitment Process
        <div
          id="intake"
          className={styles.infoLeftDiv}
          style={
            recSection === "intake"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Intake
        </div>
        <div
          id="start"
          className={styles.infoLeftDiv}
          style={
            recSection === "start"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Start the search
        </div>
        <div
          id="submit"
          className={styles.infoLeftDiv}
          style={
            recSection === "submit"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Submit candidates
        </div>
        <div
          id="present"
          className={styles.infoLeftDiv}
          style={
            recSection === "present"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Present offer
        </div>
        <div
          id="onboarding"
          className={styles.infoLeftDiv}
          style={
            recSection === "onboarding"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Onboarding support
        </div>
        <div
          id="post"
          className={styles.infoLeftDiv}
          style={
            recSection === "post"
              ? { backgroundColor: "#003696", color: "white" }
              : null
          }
          onClick={handleClick}
        >
          &#167; Post-placement
        </div>
      </div>
      <div className={styles.infoRight}>
        <div>{displaySection()}</div>
      </div>
    </div>
  );
}

export default RecruitmentProcess;
