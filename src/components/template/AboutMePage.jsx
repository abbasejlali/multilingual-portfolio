import { useRef } from "react";
import Image from "next/image";

// framer motion
import { motion, useInView } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Modules
import TitrPages from "../module/TitrPages";
import DividerCustom from "../module/DividerCustom";
import ProgressBar from "../module/ProgressBar";
import TimelineCustom from "../module/TimelineCustom";

// imgs
import picture_about from "../../../public/imgs/jpg/picture-about-me.jpg";
import profile_comment from "../../../public/imgs/jpg/profile-comment.jpg";

// icons
import { FaCircleCheck } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

// json info
import { listInformation } from "@/utils/infojson";

import { useLanguage } from "@/utils/i18n";

function AboutMePage() {
  const { t, language } = useLanguage();
  const list1 = listInformation?.slice(0, 5);
  const list2 = listInformation?.slice(5);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
  });

  return (
    <>
      <motion.div
        dir={language === "fa" ? "rtl" : "ltr"}
        className="flex flex-col flex-wrap page-with-sidebar [&>div]:px-5 items-start justify-start w-full h-full pt-40 pb-24 lg:pt-24 lg:container "
        initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
        animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        <div className="pb-24 ">
          <TitrPages subtitle={t("aboutSubtitle")} title={t("aboutTitle")} />
          <div className="max-w-[62rem] w-full max-h-[32rem] h-full overflow-hidden mt-20 mb-9  ">
            <Image
              src={picture_about}
              alt="picture about"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white ">
              Abbas Ejlali
            </h3>
            <span className="text-sm font-light text-black300 dark:text-white300 ">
              {t("profileRole")}
            </span>
          </div>
          <DividerCustom />
          <div className="w-full [&>p]:text-black300 my-2 [&>p]:text-justify [&>p]:dark:text-white300 [&>p]:text-base  ">
            <p className="mb-3">{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
          </div>
          <DividerCustom />
          <div className="flex flex-col items-start justify-between w-full my-3 sm:flex-row">
            <ul className="flex flex-col w-full sm:w-1/2 sm:ms-12">
              {list1.map((item) => (
                <li key={item.id} className="w-full mb-3 ">
                  <span className=" text-base inline-block font-medium text-black sm:!min-w-24 !min-w-28 dark:text-white">
                    {t(({ Location: "locationLabel", Email: "emailLabel", Education: "educationLabel", Interests: "interestsLabel", Experience: "experienceLabel", Focus: "focusLabel" })[item.title] || item.title)} :
                  </span>
                  <span className="font-normal text-black300 dark:text-white300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col w-full sm:w-1/2 sm:me-12">
              {list2.map((item) => (
                <li key={item.id} className="w-full mb-3 ">
                  <span className=" text-base inline-block font-medium text-black sm:!min-w-24 !min-w-28 dark:text-white">
                    {t(({ Location: "locationLabel", Email: "emailLabel", Education: "educationLabel", Interests: "interestsLabel", Experience: "experienceLabel", Focus: "focusLabel" })[item.title] || item.title)} :
                  </span>
                  <span className="font-normal text-black300 dark:text-white300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <DividerCustom />
          <button className="px-10 pt-3 pb-[14px] mt-3 text-base font-medium dark:bg-white dark:text-black text-white bg-black border-none  ">
            {t("downloadResume")}
          </button>
        </div>
        <div className="my-3 w-full bg-white px-5 py-24 dark:bg-bgslider_dark">
          <div className="mx-auto flex w-full max-w-[60rem] flex-col items-stretch gap-y-16 md:flex-row md:gap-x-16">
            <section className="min-w-0 w-full flex-1" ref={ref} aria-labelledby="programming-skills-heading">
              <h3 id="programming-skills-heading" className="mb-8 text-xl font-bold text-black md:text-2xl dark:text-white">
                {t("programmingSkills")}
              </h3>
              <ul className="flex flex-col gap-10">
                <li>
                  <ProgressBar isInView={isInView} title={t("wordpress")} progress={90} />
                </li>
                <li>
                  <ProgressBar isInView={isInView} title={t("javascript")} progress={80} />
                </li>
                <li>
                  <ProgressBar isInView={isInView} title={t("react")} progress={95} />
                </li>
              </ul>
            </section>
            <section className="min-w-0 w-full flex-1" aria-labelledby="language-skills-heading">
              <h3 id="language-skills-heading" className="mb-8 text-xl font-bold text-black md:text-2xl dark:text-white">
                {t("languageSkills")}
              </h3>
              <ul className="flex flex-col gap-10">
                <li>
                  <ProgressBar isInView={isInView} title={t("english")} progress={40} />
                </li>
                <li>
                  <ProgressBar isInView={isInView} title={t("french")} progress={60} />
                </li>
                <li>
                  <ProgressBar isInView={isInView} title={t("arabic")} progress={30} />
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full py-20 my-3 md:flex-row ">
          <ul className="flex flex-col md:w-1/2 w-full md:ps-12 mb-16 md:mb-0 [&>li]:mb-4 [&>li]:w-11/12 [&>li]:flex [&>li]:flex-row [&>li]:justify-start [&>li]:items-center [&>li]:gap-3 ">
            <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
              {t("skills")}
            </h3>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("webDevelopment")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("backendDevelopment")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("uiux")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("videoEditing")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("reactNext")}
              </span>
            </li>
          </ul>
          <ul className="flex flex-col md:w-1/2 w-full md:pe-12 [&>li]:mb-4 [&>li]:w-11/12 [&>li]:flex [&>li]:flex-row [&>li]:justify-start [&>li]:items-center [&>li]:gap-3 ">
            <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
              {t("interests")}
            </h3>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("gameDevelopment")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("workingWithAI")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("football")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("swimming")}
              </span>
            </li>
            <li>
              <FaCircleCheck className=" [&>path]:text-black dark:[&>path]:text-white w-4 h-4 " />
              <span className="text-black300 dark:text-white300 text-start">
                {t("socialSkills")}
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full py-24 my-3 bg-white lg:w-full md:flex-row dark:bg-bgslider_dark">
          <div className="flex flex-col items-start justify-between max-w-[60rem] w-full md:flex-row">
            <ul className="flex flex-col md:w-1/2 w-full md:ps-12 md:mb-0 mb-16 [&>li]:mb-10 [&>li]:w-11/12 ">
              <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
                {t("educationHeading")}
              </h3>
              <li>
                <ol className="relative border-progressbar_light border-s dark:border-progressbar_dark">
                  <TimelineCustom
                    history={t("educationOne")}
                    title={t("educationOne")}
                    text={t("degreeOne")}
                  />
                  <TimelineCustom
                    history={t("educationTwo")}
                    title={t("educationTwo")}
                    text={t("degreeTwo")}
                  />
                  <TimelineCustom
                    history={t("educationThree")}
                    title={t("educationThree")}
                    text={t("degreeThree")}
                  />
                </ol>
              </li>
            </ul>
            <ul className="flex flex-col md:w-1/2 w-full md:pe-12 [&>li]:mb-10 [&>li]:w-11/12 ">
              <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
                {t("workExperienceHeading")}
              </h3>
              <li>
                <ol className="relative border-progressbar_light border-s dark:border-progressbar_dark">
                  <TimelineCustom
                    history={t("companyOne")}
                    title={t("companyOne")}
                    text={t("webDesigner")}
                  />

                  <TimelineCustom
                    history={t("companyTwo")}
                    title={t("companyTwo")}
                    text={t("webDesigner")}
                  />
                  <TimelineCustom
                    history={t("companyThree")}
                    title={t("companyThree")}
                    text={t("webDesigner")}
                  />
                </ol>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full min-w-0 h-auto py-20 my-3 overflow-hidden list">
          <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
            {t("testimonials")}
          </h3>
          <Swiper
            key={language}
            dir={language === "fa" ? "rtl" : "ltr"}
            watchSlidesProgress={true}
            grabCursor={true}
            slidesPerView="auto"
            className=" mySwiper [&_div.swiper-slide]:bg-transparent [&_div.swiper-slide]:!w-full [&_div.swiper-slide]:md:!w-1/2  [&_div.swiper-slide]:box-border [&_div.swiper-slide]:md:ps-7 
            [&_div.swiper-slide]:h-auto [&_div.swiper-slide]:relative
            "
          >
            <SwiperSlide>
              <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
                <p className="text-base text-start text-black300 dark:text-white300 ">{t("sampleTestimonial")}</p>
              </div>
              <div className="comment-author-row flex flex-row items-center justify-start gap-4 w-full min-w-0 text-start ">
                <Image
                  src={profile_comment}
                  alt="profile comment"
                  className="w-16 h-16 rounded-full "
                />
                <div className="comment-author-copy flex min-w-0 flex-col items-start justify-start text-start">
                  <h3 className=" text-base mb-[2px] font-semibold text-black dark:text-white ">
                    {t("sampleAuthor")}
                  </h3>
                  <span className="text-sm text-black300 dark:text-white300">
                    {t("clientRole")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
                <p className="text-base text-start text-black300 dark:text-white300 ">{t("sampleTestimonial")}</p>
              </div>
              <div className="comment-author-row flex flex-row items-center justify-start gap-4 w-full min-w-0 text-start ">
                <Image
                  src={profile_comment}
                  alt="profile comment"
                  className="w-16 h-16 rounded-full "
                />
                <div className="comment-author-copy flex min-w-0 flex-col items-start justify-start text-start">
                  <h3 className=" text-base mb-[2px] font-semibold text-black dark:text-white ">
                    {t("sampleAuthor")}
                  </h3>
                  <span className="text-sm text-black300 dark:text-white300">
                    {t("clientRole")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
                <p className="text-base text-start text-black300 dark:text-white300 ">{t("sampleTestimonial")}</p>
              </div>
              <div className="comment-author-row flex flex-row items-center justify-start gap-4 w-full min-w-0 text-start ">
                <Image
                  src={profile_comment}
                  alt="profile comment"
                  className="w-16 h-16 rounded-full "
                />
                <div className="comment-author-copy flex min-w-0 flex-col items-start justify-start text-start">
                  <h3 className=" text-base mb-[2px] font-semibold text-black dark:text-white ">
                    {t("sampleAuthor")}
                  </h3>
                  <span className="text-sm text-black300 dark:text-white300">
                    {t("clientRole")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
                <p className="text-base text-start text-black300 dark:text-white300 ">{t("sampleTestimonial")}</p>
              </div>
              <div className="comment-author-row flex flex-row items-center justify-start gap-4 w-full min-w-0 text-start ">
                <Image
                  src={profile_comment}
                  alt="profile comment"
                  className="w-16 h-16 rounded-full "
                />
                <div className="comment-author-copy flex min-w-0 flex-col items-start justify-start text-start">
                  <h3 className=" text-base mb-[2px] font-semibold text-black dark:text-white ">
                    {t("sampleAuthor")}
                  </h3>
                  <span className="text-sm text-black300 dark:text-white300">
                    {t("clientRole")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </>
  );
}

export default AboutMePage;
