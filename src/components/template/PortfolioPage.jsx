// framer motion
import { motion } from "framer-motion";

// module
import TitrPages from "../module/TitrPages";
import CardMain from "../module/CardMain";

// portfoilo info
import { portfolioinfo } from "@/utils/infojson";

import { useLanguage } from "@/utils/i18n";

function PortfolioPage() {
  const { t } = useLanguage();
  return (
    <motion.div
      className="flex flex-col flex-wrap page-with-sidebar [&>div]:px-5 items-start justify-start w-full h-full pt-40 pb-24 lg:pt-24 lg:container "
      initial={{ opacity: 0, translateX: "20px", visibility: "hidden" }}
      animate={{ opacity: 1, translateX: "0", visibility: "visible" }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <div className="flex flex-col items-start justify-between w-full ">
        <TitrPages subtitle={t("portfolioSubtitle")} title={t("portfolioTitle")} />
        <div className="grid w-full grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-14">
          {portfolioinfo?.map((portfolio) => (
            <CardMain key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
