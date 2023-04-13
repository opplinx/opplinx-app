import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="heroContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 7 }}
    >
      <video
        height="400"
        width="400"
        src="/computer-video-2.mp4"
        type="video/mp4"
        loop
        muted
        autoPlay
      ></video>
      <div className="heroText">
        Linking Opportunities with Careers <br />{" "}
        <span>
          Leading React JS and Full Stack Developer Recruitment Agency
        </span>
      </div>
    </motion.div>
  );
}

export default Hero;
