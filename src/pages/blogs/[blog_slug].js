import BlogDetailsPage from "@/components/template/BlogDetailsPage";

function BlogDetails() {
  return <BlogDetailsPage />;
}

export default BlogDetails;

export async function getStaticPaths() {
  return {
    paths: [{ params: { blog_slug: "The-best-font-for-websites" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
