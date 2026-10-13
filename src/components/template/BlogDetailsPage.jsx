import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Module
import TitrPages from "../module/TitrPages";
import DividerCustom from "../module/DividerCustom";

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

import { useLanguage } from "@/utils/i18n";

function BlogDetailsPage(props) {
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
      <TitrPages subtitle={t("blogSubtitle")} title={t("detailsArticle")} />
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
            {t("articleTitle")}
          </h3>
          <span className="text-sm font-light text-black300 dark:text-white300 ">
            {t("by")} Abbas Ejlali
          </span>
        </div>
        <DividerCustom />
        <div className="flex flex-col items-start justify-start w-full md:justify-between md:flex-row ">
          <div className="md:w-9/12 w-full mb-8 md:mb-0 [&>p]:text-black300 my-2 [&>p]:text-justify [&>p]:dark:text-white300 [&>p]:text-base  ">
            <p>{t("articleDescription")}</p>
            <br />
            <p>{t("articleDescription2")}</p>
            <br />
            <p>{t("articleDescription3")}</p>
          </div>
          <ul className="md:w-3/12  md:inline hidden  [&>li]:flex [&>li]:flex-col [&>li]:justify-start [&>li]:items-start [&>li]:mb-3 md:me-20 first:[&>li>span]:text-black first:[&>li>span]:dark:text-white last:[&>li>span]:text-black300 last:[&>li>span]:dark:text-white300 last:[&>li>span]:text-sm  last:[&>li>span]:font-medium  first:[&>li>span]:font-bold first:[&>li>span]:mb-2 ">
            <li>
              <span>{t("projectDate")}</span>
              <span>1403-01-28</span>
            </li>
            <li>
              <span>{t("share")}</span>
              <ul className="flex items-center xl:justify-start justify-start w-full h-fit gap-2 [&>li]:ms-0 [&>li>a>svg]:!w-7 [&>li>a>svg]:!h-6 [&>li>a>svg>path]:text-black [&>li>a>svg>path]:dark:text-white [&>li>a]:inline-block [&>li>a>svg]:rounded-full ">
                <li>
                  <a href="#" target="_blanck">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <FaSquareInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <FaSquarePhoneFlip />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blanck">
                    <FaSquareXTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="max-w-[62rem] w-full h-full grid grid-cols-1 gap-10 my-12  ">
          <Image
            src={picture_about}
            alt="picture about"
            width="100%"
            className=" max-h-[32rem] "
            objectFit="cover"
          />
        </div>
        <div className="w-full mb-8 md:mb-0 [&>p]:text-black300 my-2 [&>p]:text-justify [&>p]:dark:text-white300 [&>p]:text-base  ">
          <p>{t("sampleArticleBody")}</p>
          <br />
          <p>{t("sampleArticleBody2")}</p>
          <br />
          <p>{t("sampleArticleBody2")}</p>
        </div>
        <ul className=" w-full md:hidden inline  [&>li]:flex  [&>li]:justify-between [&>li]:items-center [&>li]:mb-3 md:me-20 first:[&>li>span]:text-black first:[&>li>span]:dark:text-white last:[&>li>span]:text-black300 last:[&>li>span]:dark:text-white300 last:[&>li>span]:text-sm  last:[&>li>span]:font-medium  first:[&>li>span]:font-bold first:[&>li>span]:mb-2 ">
          <li>
            <span>{t("projectDate")}</span>
            <span>1403-01-28</span>
          </li>
          <li>
            <span>{t("share")}</span>
            <ul className="grid grid-cols-4 gap-1 w-fit h-fit  [&>li>a>svg]:!w-7 [&>li>a>svg]:!h-6 [&>li>a>svg>path]:text-black [&>li>a>svg>path]:dark:text-white [&>li>a]:inline-block [&>li>a>svg]:rounded-full ">
              <li>
                <a href="#" target="_blanck">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" target="_blanck">
                  <FaSquareInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blanck">
                  <FaSquarePhoneFlip />
                </a>
              </li>
              <li>
                <a href="#" target="_blanck">
                  <FaSquareXTwitter />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-full min-w-0 h-auto py-20 my-3 overflow-hidden list">
        <h3 className="mb-10 text-xl font-bold text-black md:text-2xl dark:text-white ">
          {t("comments")}
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
                  {t("clientRole")}
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
                  {t("clientRole")}
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
                  {t("clientRole")}
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
                  {t("clientRole")}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default BlogDetailsPage;
