import PortfolioDetailsPage from "@/components/template/PortfolioDetailsPage";

function PortfolioDetails() {
  return <PortfolioDetailsPage />;
}

export default PortfolioDetails;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { portfolio_slug: "Clothing-store-site-with-React-and-Next" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
