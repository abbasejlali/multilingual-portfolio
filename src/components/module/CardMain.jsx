import Link from "next/link";
import Image from "next/image";

// img
import cardimg from "../../../public/imgs/jpg/detailservice.jpg";
import { useLanguage } from "@/utils/i18n";

function CardMain({ portfolio }) {
  const { slug, title, author } = portfolio;
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-start justify-start w-full h-auto transition-all duration-300 shadow-md group hover:shadow-xl ">
      <Image
        src={cardimg}
        alt="img card"
        className="w-full max-h-[28rem] h-full "
      />
      <div className="flex flex-col items-start justify-start w-full px-10 pt-8 bg-white pb-7 dark:bg-bgslider_dark ">
        <div className=" w-full flex flex-row justify-start items-center [&>*]:text-[0.813rem] [&>*]:text-black300 dark:[&>*]:text-white300 [&>*]:font-normal    ">
          <h2>
            {t("by")} {" "}
            <Link
              href="#"
              className="transition-all duration-300 hover:text-black dark:hover:text-white"
            >
              {author}
            </Link>
          </h2>
          <span className="px-1">/</span>
          <span>1403-01-28</span>
        </div>
        <div className="my-1 divider before:bg-divider_light after:bg-divider_light dark:before:bg-divider_dark dark:after:bg-divider_dark before:h-[0.065rem] after:h-[0.065rem] "></div>
        <h2 className="mb-3 leading-6 title ">
          <Link
            href={`/${slug}`}
            className="inline-block text-lg font-semibold text-black dark:text-white transition-all duration-300 !line-clamp-2 hover:text-black"
          >
            {title}
          </Link>
        </h2>
        <div className="relative flex flex-row items-center justify-start w-full mt-3 cursor-pointer ">
          <Link
            href={`/${slug}`}
            className="absolute invisible overflow-hidden text-xs text-black transition-all duration-200 group-hover:ps-2 -end-3 dark:text-white group-hover:end-0 group-hover:visible"
          >
            {t("moreDetails")}
          </Link>
          <div className="w-6 transition-all duration-300 group-hover:me-20 group-hover:w-12 divider before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white before:h-[0.5px] after:h-[0.5px] "></div>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
