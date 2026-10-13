import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

function BtnDarkmode({ darkmode, setDarkmode }) {
  const toggleDarkmode = () => {
    const nextDarkmode = !darkmode;
    document.cookie = `theme=${nextDarkmode ? "dark" : "light"}; path=/; max-age=31536000; samesite=lax`;
    setDarkmode(nextDarkmode);
  };

  return (
    <button
      type="button"
      onClick={toggleDarkmode}
      aria-label={darkmode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkmode}
      title={darkmode ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-8 start-8 z-[99] inline-flex h-12 w-12 items-center justify-center rounded-xl border border-divider_light bg-white text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-divider_dark dark:bg-bgslider_dark dark:text-white dark:focus-visible:ring-white/40"
    >
      {darkmode ? (
        <MdOutlineWbSunny className="h-6 w-6 text-black dark:text-white [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
      ) : (
        <MdOutlineDarkMode className="h-6 w-6 text-black dark:text-white [&>path]:text-black dark:[&>path]:text-white" aria-hidden="true" />
      )}
    </button>
  );
}

export default BtnDarkmode;
