// framer motion
import { motion } from "framer-motion";

// Module
import TitrPages from "../module/TitrPages";
import { useLanguage } from "@/utils/i18n";

function ContactPage(props) {
  const { t } = useLanguage();
  return (
    <motion.div
      className="page-with-sidebar flex flex-col flex-wrap items-start justify-start w-full h-full pt-40 lg:pt-24 lg:pb-24"
      initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
      animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
      transition={{
        duration: 0.1,
        ease: "linear",
      }}
    >
      <div className="flex flex-col items-start justify-between w-full ">
        <TitrPages subtitle={t("contactSubtitle")} title={t("contactTitle")} />
        <div className="w-full mt-20 mb-24">
          <form>
            <div className="grid w-full grid-cols-1 gap-10 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-black dark:text-white"
                >
                  {t("name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent outline-0 border border-border_cardservice dark:border-border_contactdark text-black300 dark:text-white300 font-light text-sm   focus:border-focus_input transition-all duration-300 block w-full p-2.5  dark:focus:border-white"
                  placeholder={t("namePlaceholder")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-medium text-black dark:text-white"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent outline-0 border border-border_cardservice dark:border-border_contactdark text-black300 dark:text-white300 font-light text-sm   focus:border-focus_input transition-all duration-300 block w-full p-2.5  dark:focus:border-white"
                  placeholder="iman.doe@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="bg-transparent outline-0 border border-border_cardservice dark:border-border_contactdark text-black300 dark:text-white300 font-light text-sm   focus:border-focus_input transition-all duration-300 block w-full p-2.5  dark:focus:border-white"
                  placeholder={t("messagePlaceholder")}
                ></textarea>
              </div>
            </div>
            <button className="px-10 pt-3 pb-[14px] mt-3 text-base font-medium dark:bg-white dark:text-black text-white bg-black border-none  ">
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
