import { MdOutlineClose } from "react-icons/md";
import { useLanguage } from "@/utils/i18n";

// imgs
import detailsimgs from "../../../public/imgs/jpg/detailservice.jpg";
import Image from "next/image";

function CardService({ data }) {
  const { t } = useLanguage();
  const { id, title, subdescription, description } = data;

  const opneHandeler = (e) => {
    console.log(`my_modal_${e.target.name}`);
    document.getElementById(`my_modal_${e.target.name}`).showModal();
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start px-8 py-12 transition-all duration-300 bg-white border group hover:border-border_cardservice dark:bg-bgslider_dark border-progressbar_light">
        <span className="inline-block group-hover:bg-progressbar_light  mb-6 relative w-14 h-14 leading-[3.8rem] text-center rounded-full bg-bgtitr dark:bg-bgtitr_dark text-base font-bold text-black dark:text-white  transition-all duration-300">
          0{id}
        </span>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="w-full text-sm !leading-6 font-light line-clamp-3 text-black300 dark:text-white300">
          {subdescription}
        </p>
        <div className="relative flex flex-row items-center justify-start w-full mt-3 cursor-pointer ">
          <button
            className="absolute invisible overflow-hidden text-xs text-black transition-all duration-200 group-hover:ps-2 -end-3 dark:text-white group-hover:end-0 group-hover:visible"
            onClick={opneHandeler}
            name={id}
          >
            {t("moreDetails")}
          </button>
          <div className="w-6 transition-all duration-300 group-hover:me-20 group-hover:w-12 divider before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white before:h-[0.5px] after:h-[0.5px] "></div>
        </div>
      </div>
      <dialog id={`my_modal_${id}`} className={`modal`}>
        <div className="lg:p-12  md:p-10 p-5  modal-box lg:max-w-[53rem] md:max-w-[31rem] max-w-72 w-full !rounded-none overflow-hidden overflow-y-scroll bg-white dark:bg-bgmain_dark ">
          <form method="dialog" className="z-50 ">
            <button className="absolute w-10 h-10 btn btn-sm btn-circle btn-ghost end-2 top-2">
              <MdOutlineClose className="w-5 h-5 [&>path]:text-black dark:[&>path]:text-white " />
            </button>
          </form>
          <div className="w-full h-auto pt-10 md:pt-7">
            <Image
              src={detailsimgs}
              alt="details img  "
              className="w-full max-h-[27rem] object-cover "
            />
            <h3 className="mt-10 mb-6 text-xl font-bold text-black lg:text-2xl dark:text-white">
              {title}
            </h3>
            <p className="py-4 text-sm leading-7 text-justify md:text-base text-black300 dark:text-white300 ">
              {description}
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default CardService;
