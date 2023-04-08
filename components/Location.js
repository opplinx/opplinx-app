import styles from "../src/styles/Location.module.css";

function Location() {
  return (
    <>
      <div className={styles.locationContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60380.756181195895!2d-74.03000300249298!3d40.738361158172694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1f090f319%3A0xcec994553108465!2s215%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1680963681618!5m2!1sen!2sus"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Location;
