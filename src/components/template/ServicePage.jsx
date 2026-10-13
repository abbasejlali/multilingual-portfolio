import { useRef } from "react";

// framer motion
import { motion, useInView } from "framer-motion";

// modules
import CardService from "../module/CardService";
import TitrPages from "../module/TitrPages";
import AnimatedCounter from "../module/AnimatedCounter";

// svg
import { Brand1, Brand2 } from "../../../public/imgs/svg/allsvg";

// icons
import { FaCircleCheck } from "react-icons/fa6";

// json info
import { dataservice } from "@/utils/infojson";

import { useLanguage } from "@/utils/i18n";

function ServicePage() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
  });

  return (
    <motion.div
      className="flex flex-col flex-wrap page-with-sidebar [&>div]:px-5 items-start justify-start w-full h-full pt-40  lg:pt-24 lg:container "
      initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
      animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <div className="pb-16">
        <TitrPages subtitle={t("serviceSubtitle")} title={t("serviceTitle")} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 w-full mt-20 lg:[&>div]:max-w-[17rem]  [&>div]:w-full">
          {dataservice?.map((item, index) => (
            <CardService key={item.id} data={{ ...item, title: t("serviceNames")[index], subdescription: t("serviceDescription"), description: t("serviceDescription") }} />
          ))}
        </div>
      </div>
      <div className="w-full py-24 bg-white lg:w-full dark:bg-bgslider_dark">
        <div className="flex flex-col items-start justify-start max-w-[60rem] w-full ">
          <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
            {t("trustedBrands")}
          </h3>
          <ul
            className="flex flex-wrap items-start justify-start w-full md:[&>li]:w-1/4 [&>li]:w-2/4 
            [&>li]:border-solid [&>li]:border-progressbar_light [&>li]:dark:border-progressbar_dark [&>li]:border [&>li]:text-center [&>li]:h-[145px] [&>li]:leading-[145px] [&>li]:relative [&>li]:overflow-hidden
            [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li>svg]:transition-all [&>li>svg]:duration-300 [&>li>svg]:opacity-50  
          "
          >
            <li className="group">
              <Brand1 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand2 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand1 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand2 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand1 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand2 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand1 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
            <li className="group">
              <Brand2 StyleSvg=" group-hover:opacity-100 max-w-[50%] [&_path]:text-black [&_path]:dark:text-white max-h-12 " />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full pt-24 pb-16 ">
        <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white">
          {t("funFacts")}
        </h3>
        <ul
          className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full [&>li]:w-full
           [&>li]:h-auto [&>li]:flex [&>li]:flex-col [&>li]:justify-start [&>li]:items-center   [&>li]:relative [&>li]:border-solid [&>li]:border-progressbar_light [&>li]:dark:border-progressbar_dark [&>li]:border [&>li]:text-center [&>li]:px-5 [&>li]:py-10
           [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mb-1 [&_h3]:text-black [&_h3]:dark:text-white
           [&_span]:text-base [&_span]:text-black300 [&_span]:dark:text-white300 [&_span]:font-light"
          ref={ref}
        >
          <li>
            {isInView && (
              <AnimatedCounter
                from={0}
                to={777}
                symbol="+"
                StyleCustome="!font-semibold !text-xl !mb-1 !text-black dark:!text-white"
              />
            )}
            <span>{t("projectsCompleted")}</span>
          </li>
          <li>
            {isInView && (
              <AnimatedCounter
                from={0}
                to={450}
                symbol="+"
                StyleCustome="!font-semibold !text-xl !mb-1 !text-black dark:!text-white"
              />
            )}
            <span>{t("clients")}</span>
          </li>
          <li>
            {isInView && (
              <AnimatedCounter
                from={0}
                to={300}
                symbol="K+"
                StyleCustome="!font-semibold !text-xl !mb-1 !text-black dark:!text-white"
              />
            )}
            <span>{t("linesOfCode")}</span>
          </li>
        </ul>
      </div>
      <div className="w-full py-24 bg-white lg:w-full dark:bg-bgslider_dark">
        <div className="flex flex-col items-start justify-start max-w-[60rem] w-full ">
          <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
            {t("pricingTitle")}
          </h3>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 ">
            <div className=" h-auto relative border-solid border-progressbar_light dark:border-progressbar_dark border px-10 pt-7 pb-11">
              <div className="flex items-baseline text-black dark:text-white">
                <span className="text-base font-normal text-black dark:text-white ms-1 ">
                  $
                </span>
                <span className="text-[2.5rem] font-extrabold font-sans tracking-tight text-black dark:text-white ">
                  0
                </span>
                {/* <span className="ms-1 text-xl font-normal text-black300 dark:text-white300">
                  {t("monthly")}
                </span> */}
              </div>
              <h5 className="text-black dark:text-white font-semibold text-xl border-solid border-progressbar_light dark:border-progressbar_dark border-b mb-5 pb-5">
                {t("freePlan")}
              </h5>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-light  text-black300 dark:text-white300 ms-3">
                    {t("freeTemplate")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("freeFonts")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("oneMonthSupport")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("customTemplate")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("premiumFonts")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("threeMonthsSupport")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("professionalConsultation")}
                  </span>
                </li>
              </ul>
              <button className="px-10 pt-3 pb-[14px] mt-3 text-base font-medium dark:bg-white dark:text-black text-white bg-black border-none  ">
                {t("purchase")}
              </button>
            </div>
            <div className=" h-auto relative border-solid border-progressbar_light dark:border-progressbar_dark border px-10 pt-7 pb-11">
              <div className="flex items-baseline text-black dark:text-white">
                <span className="text-base font-normal text-black dark:text-white ms-1 ">
                  $
                </span>
                <span className="text-[2.5rem] font-extrabold font-sans tracking-tight text-black dark:text-white ">
                  4
                </span>
                {/* <span className="ms-1 text-xl font-normal text-black300 dark:text-white300">
                  {t("monthly")}
                </span> */}
              </div>
              <h5 className="text-black dark:text-white font-semibold text-xl border-solid border-progressbar_light dark:border-progressbar_dark border-b mb-5 pb-5">
                {t("popular")}
              </h5>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-light  text-black300 dark:text-white300 ms-3">
                    {t("freeTemplate")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("freeFonts")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("oneMonthSupport")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("customTemplate")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("premiumFonts")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("threeMonthsSupport")}
                  </span>
                </li>
                <li className="flex line-through decoration-black300 dark:decoration-white300">
                  <FaCircleCheck className=" [&>path]:text-black300 dark:[&>path]:text-white300 w-4 h-4 " />
                  <span className="text-base font-light text-black300 dark:text-white300 ms-3">
                    {t("professionalConsultation")}
                  </span>
                </li>
              </ul>
              <button className="px-10 pt-3 pb-[14px] mt-3 text-base font-medium dark:bg-white dark:text-black text-white bg-black border-none  ">
                {t("purchase")}
              </button>
            </div>
            <div className=" h-auto relative border-solid border-progressbar_light dark:border-progressbar_dark border px-10 pt-7 pb-11">
              <div className="flex items-baseline text-black dark:text-white">
                <span className="text-base font-normal text-black dark:text-white ms-1 ">
                  $
                </span>
                <span className="text-[2.5rem] font-extrabold font-sans tracking-tight text-black dark:text-white ">
                  10
                </span>
                {/* <span className="ms-1 text-xl font-normal text-black300 dark:text-white300">
                  {t("monthly")}
                </span> */}
              </div>
              <h5 className="text-black dark:text-white font-semibold text-xl border-solid border-progressbar_light dark:border-progressbar_dark border-b mb-5 pb-5">
                {t("professional")}
              </h5>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-light  text-black300 dark:text-white300 ms-3">
                    {t("freeTemplate")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("freeFonts")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("oneMonthSupport")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("customTemplate")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("premiumFonts")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("threeMonthsSupport")}
                  </span>
                </li>
                <li className="flex">
                  <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
                  <span className="text-base font-normal text-black300 dark:text-white300 ms-3">
                    {t("professionalConsultation")}
                  </span>
                </li>
              </ul>
              <button className="px-10 pt-3 pb-[14px] mt-3 text-base font-medium dark:bg-white dark:text-black text-white bg-black border-none  ">
                {t("purchase")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicePage;
