import Link from "next/link";

// custome svgs
import { LogoMainSvg } from "../../../public/imgs/svg/allsvg";

// icons
import { MdOutlineClose, MdMenu, MdLanguage } from "react-icons/md";
import { useLanguage } from "@/utils/i18n";

function HeaderMain({ open, setOpen }) {
  const { language, setLanguage, t } = useLanguage();
  const openHandeler = () => {
    setOpen(!open);
  };

  return (
    <>
      <header
        dir={language === "fa" ? "rtl" : "ltr"}
        className={`w-full fixed transition-all ease-in-out duration-300 ${
          open ? "sidebar-open" : "sidebar-closed"
        } site-sidebar min-h-screen h-auto max-w-sm bg-white dark:bg-bgslider_dark px-[70px] z-50 flex flex-col justify-center items-start ${language === "fa" ? "text-right" : "text-left"}`}
      >
        <div className="hidden w-full justify-start lg:flex">
          <LogoMainSvg StyleSvg=" w-28 h-fit [&>path]:text-black [&>path]:dark:text-white " />
        </div>
        <ul
          className={`flex w-full flex-col justify-start leading-8 py-14 items-start ${language === "fa" ? "text-right" : "text-left"} [&>li]:w-full [&>li>a]:block [&>li>a]:w-full [&>li>a]:text-start [&>li>a]:text-black300 [&>li>a]:dark:text-white300 [&>li>a]:font-medium [&>li>a]:transition-all [&>li>a]:duration-300`}
        >
          <li>
            <Link className="hover:text-black dark:hover:text-white " href="/">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black dark:hover:text-white "
              href="/about-me"
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black dark:hover:text-white "
              href="/service"
            >
              {t("services")}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black dark:hover:text-white "
              href="/portfolio"
            >
              {t("portfolio")}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black dark:hover:text-white "
              href="/blogs"
            >
              {t("blog")}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black dark:hover:text-white "
              href="/contact"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        <div
          className="language-switch mb-7"
          role="group"
          aria-label={t("language")}
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={
              language === "en"
                ? "language-switch__option is-active"
                : "language-switch__option"
            }
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("fa")}
            className={
              language === "fa"
                ? "language-switch__option is-active"
                : "language-switch__option"
            }
            aria-pressed={language === "fa"}
          >
            فا
          </button>
        </div>
        <div className="w-full ">
          <p
            className={`w-full text-[15px] text-black300 dark:text-white300 font-montserrat leading-[25px] ${language === "fa" ? "text-right" : "text-left"}`}
          >
            © {new Date().getFullYear()} Portfolio
            <br />
            {t("madeBy")}{" "}
            <a
              className="font-medium transition-all duration-300 text-black300 dark:text-white300 dark:hover:text-white hover:text-black "
              href="https://github.com/abbasejlali"
              target="_blank"
            >
              {t("fullName")}
            </a>
          </p>
        </div>
      </header>
      <div
        dir={language === "fa" ? "rtl" : "ltr"}
        className="fixed z-50 w-full px-5 translate-x-1/2 lg:hidden top-5 right-1/2"
      >
        <div className="flex flex-row items-center justify-between p-3 bg-white shadow-xl dark:bg-bgslider_dark rounded-xl navbar ">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={openHandeler} />
            <MdMenu className="w-10 h-10 fill-current swap-off [&>path]:text-black [&>path]:dark:text-white " />
            <MdOutlineClose className="w-10 h-10 fill-current swap-on [&>path]:text-black [&>path]:dark:text-white " />
          </label>
          <LogoMainSvg StyleSvg=" md:w-24 w-20 h-fit [&>path]:text-black [&>path]:dark:text-white " />
          <div
            className="language-switch language-switch--compact"
            role="group"
            aria-label={t("language")}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "language-switch__option is-active"
                  : "language-switch__option"
              }
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fa")}
              className={
                language === "fa"
                  ? "language-switch__option is-active"
                  : "language-switch__option"
              }
              aria-pressed={language === "fa"}
            >
              فا
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMain;
