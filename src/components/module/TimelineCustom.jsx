function TimelineCustom({ history, title, text }) {
  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-progressbar_light dark:border-progressbar_dark dark:bg-bgslider_dark "></div>
        <time className="mb-1 text-sm font-normal leading-none text-black300 dark:text-white ">
          {history}
        </time>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-base font-normal text-black300 dark:text-white300">
          {text}
        </p>
      </li>
    </>
  );
}

export default TimelineCustom;
