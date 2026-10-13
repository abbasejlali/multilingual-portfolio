import { memo } from "react";

function TitrPages({ title, subtitle }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <span className="inline-block px-2 py-1 mb-3 text-base font-medium uppercase bg-bgtitr dark:bg-bgtitr_dark text-3 text-subtitr dark:text-subtitr_dark">
        {subtitle}
      </span>
      <h2 className="text-3xl font-extrabold text-black dark:text-white ">
        {title}
      </h2>
    </div>
  );
}

export default memo(TitrPages);
