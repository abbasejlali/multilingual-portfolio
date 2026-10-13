import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { LanguageProvider } from "@/utils/i18n";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
