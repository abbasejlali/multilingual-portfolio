import { useEffect, useState } from "react";

// fonts

import { ShabnamFont } from "@/utils/fonts";
import { useLanguage } from "@/utils/i18n";

// Get Cookies
import Cookies from "js-cookie";

// modules
import HeaderMain from "../module/HeaderMain";
import BtnDarkmode from "../module/BtnDarkmode";
import FlareCursor from "@/utils/FollowMouse";

function Layout({ children }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  // dark mode
  useEffect(() => {
    const cookie = Cookies.get("theme");

    if (cookie === "dark") {
      document.documentElement.classList.add("dark");
      document.cookie = "theme=dark; path=/;";
      setDarkmode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.cookie = "theme=light; path=/;";
      setDarkmode(false);
    }
  }, [darkmode]);

  return (
    <>
      <div
        dir={language === "fa" ? "rtl" : "ltr"}
        className={`site-shell ${language === "fa" ? ShabnamFont.className : "font-sans"}`}
      >
        <BtnDarkmode darkmode={darkmode} setDarkmode={setDarkmode} />
        <HeaderMain open={open} setOpen={setOpen} />
        <section className="page-content" dir={language === "fa" ? "rtl" : "ltr"}>
          {children}
        </section>
      </div>
      <FlareCursor />
    </>
  );
}

export default Layout;
