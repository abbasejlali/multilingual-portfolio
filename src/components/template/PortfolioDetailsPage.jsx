import Link from "next/link";
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Module
import TitrPages from "../module/TitrPages";
import DividerCustom from "../module/DividerCustom";
import { useLanguage } from "@/utils/i18n";

// imgs
import picture_about from "../../../public/imgs/jpg/picture-about-me.jpg";
import profile_comment from "../../../public/imgs/jpg/profile-comment.jpg";

// icons
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquarePhoneFlip,
} from "react-icons/fa6";

function PortfolioDetailsPage() {
  const { t, language } = useLanguage();
  return (
    <motion.div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="flex flex-col flex-wrap page-with-sidebar [&>div]:px-5 items-start justify-start w-full h-full pt-40  lg:pt-24 lg:pb-24 lg:container "
      initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
      animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <TitrPages subtitle={t("portfolioSubtitle")} title={t("detailsProject")} />
      <div>
        <div className="max-w-[62rem] w-full max-h-[32rem] h-full overflow-hidden mt-20 mb-9  ">
          <Image
            src={picture_about}
            alt="picture about"
            width="100%"
            height="100%"
            className=""
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white ">
            {t("projectTitle")}
          </h3>
          <span className="text-sm font-light text-black300 dark:text-white300 ">
            {t("by")} Abbas Ejlali
          </span>
        </div>
        <DividerCustom />
        <div className="flex w-full min-w-0 flex-col items-start gap-8 md:flex-row md:gap-12">
          <div className="my-2 w-full min-w-0 md:mb-0 md:flex-1 [&>p]:text-base [&>p]:text-justify [&>p]:text-black300 [&>p]:dark:text-white300">
            <p>{t("projectDescription")}</p>
            <p className="mt-4">{t("projectDescription2")}</p>
            <p className="mt-4">{t("projectDescription3")}</p>
          </div>
          <ul className="flex w-full min-w-0 flex-col gap-6 md:w-64 md:flex-none md:ps-8 md:border-s md:border-divider_light md:dark:border-divider_dark">
            <li className="flex min-w-0 flex-col items-start gap-2">
              <span className="text-sm font-semibold text-black dark:text-white">{t("projectClient")}</span>
              <span className="text-sm font-medium leading-6 text-black300 dark:text-white300">{t("projectClientValue")}</span>
            </li>
            <li className="flex min-w-0 flex-col items-start gap-2">
              <span className="text-sm font-semibold text-black dark:text-white">{t("projectDate")}</span>
              <span dir="ltr" className="text-sm font-medium leading-6 text-black300 dark:text-white300">1403-01-28</span>
            </li>
            <li className="flex min-w-0 flex-col items-start gap-3">
              <span className="text-sm font-semibold text-black dark:text-white">{t("share")}</span>
              <ul className="flex flex-wrap items-center gap-2.5" aria-label={t("share")}>
                <li>
                  <a href="#" aria-label="Share on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-divider_light bg-white text-black300 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-divider_dark dark:bg-bgmain_dark dark:text-white300 dark:hover:border-white dark:hover:text-white dark:focus-visible:ring-white/40">
                    <FaLinkedin className="h-5 w-5 [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Share on Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-divider_light bg-white text-black300 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-divider_dark dark:bg-bgmain_dark dark:text-white300 dark:hover:border-white dark:hover:text-white dark:focus-visible:ring-white/40">
                    <FaSquareInstagram className="h-5 w-5 [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Share by phone" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-divider_light bg-white text-black300 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-divider_dark dark:bg-bgmain_dark dark:text-white300 dark:hover:border-white dark:hover:text-white dark:focus-visible:ring-white/40">
                    <FaSquarePhoneFlip className="h-5 w-5 [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Share on X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-divider_light bg-white text-black300 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-divider_dark dark:bg-bgmain_dark dark:text-white300 dark:hover:border-white dark:hover:text-white dark:focus-visible:ring-white/40">
                    <FaSquareXTwitter className="h-5 w-5 [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex w-full min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
          <span className="shrink-0 font-bold text-black dark:text-white">
            {t("projectLink")}:
          </span>
          <Link
            href="https://github.com/abbasejlali"
            className="min-w-0 break-all font-normal text-black300 transition-colors duration-300 hover:text-black dark:text-white300 dark:hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/abbasejlali
          </Link>
        </div>
        <div className="max-w-[62rem] w-full h-full grid grid-cols-1 gap-10 mt-20 mb-9  ">
          <Image
            src={picture_about}
            alt="picture about"
            width="100%"
            className=" max-h-[32rem] "
            objectFit="cover"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
            <Image
              src={picture_about}
              alt="picture about"
              width="100%"
              height="100%"
              className=""
              objectFit="cover"
            />
            <Image
              src={picture_about}
              alt="picture about"
              width="100%"
              height="100%"
              className=""
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-w-0 h-auto py-20 my-3 overflow-hidden list">
        <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
          {t("clientTestimonials")}
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
              <p className="text-base text-start text-black300 dark:text-white300 ">
                {t("sampleTestimonial")}
              </p>
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
                  {t("projectClient")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
              <p className="text-base text-start text-black300 dark:text-white300 ">
                {t("sampleTestimonial")}
              </p>
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
                  {t("projectClient")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
              <p className="text-base text-start text-black300 dark:text-white300 ">
                {t("sampleTestimonial")}
              </p>
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
                  {t("projectClient")}
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="comment-bubble relative w-full min-w-0 box-border p-6 sm:p-8 md:p-10 border-2 border-solid border-border_comment mb-7 text-start">
              <p className="text-base text-start text-black300 dark:text-white300 ">
                {t("sampleTestimonial")}
              </p>
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
                  {t("projectClient")}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default PortfolioDetailsPage;
