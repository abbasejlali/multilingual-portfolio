// framer motion
import { motion } from "framer-motion";

// Mogule
import AnimatedCounter from "./AnimatedCounter";

function ProgressBar({ title, progress, isInView }) {
  return (
    <>
      <div className="flex justify-between mb-3">
        <span className="text-base font-light text-black dark:text-white">
          {title}
        </span>
        <AnimatedCounter
          from={0}
          to={progress}
          StyleCustome="text-base font-light text-black dark:text-white"
          symbol="%"
        />
      </div>
      <div className="w-full bg-progressbar_light rounded-full h-[3px] dark:bg-progressbar_dark">
        <motion.div
          className={`bg-black dark:bg-white h-[3px] rounded-full `}
          style={{ width: isInView ? `${progress}%` : "0%" }}
          transition={{
            ease: "linear",
            duration: "1",
          }}
          viewport={{
            margin: "-200px",
          }}
          animate={{
            width: isInView ? `${progress}%` : "0%",
          }}
        ></motion.div>
      </div>
    </>
  );
}

export default ProgressBar;
