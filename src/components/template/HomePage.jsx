// framer motion
import { motion } from "framer-motion";
import { useLanguage } from "@/utils/i18n";

// icons
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquarePhoneFlip,
} from "react-icons/fa6";

function HomePage() {
  const { t } = useLanguage();
  return (
    <motion.div
      className="flex flex-col lg:h-screen h-[calc(100vh+85px)] flex-wrap items-center justify-center w-full  px-5 lg:px-10 xl:flex-row "
      initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
      animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <div id="pic-wave" className="relative rounded-full w-72 h-72">
        <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover rounded-full "></div>
      </div>
      <div className="flex flex-col items-center justify-start w-full max-w-md xl:items-start xl:mt-0 mt-7 xl:ms-20">
        <h3 className="mb-6 text-5xl font-bold text-black md:text-6xl dark:text-white ">
          {t("fullName")}
        </h3>
        <p className="mb-6 text-base font-medium text-center xl:text-start text-black300 dark:text-white300 ">
          {t("intro")}
        </p>
        <ul className="flex items-center xl:justify-start justify-center w-full h-fit gap-2 [&>li]:ms-0 [&>li>a>svg]:!w-7 [&>li>a>svg]:!h-6 [&>li>a>svg>path]:text-black [&>li>a>svg>path]:dark:text-white [&>li>a]:inline-block [&>li>a>svg]:rounded-full ">
          <li>
            <a href="#" target="_blanck">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSquareInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSquarePhoneFlip />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default HomePage;
