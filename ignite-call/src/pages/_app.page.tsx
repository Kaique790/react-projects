import "../lib/dayjs";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { globalStyles } from "@/styles/global";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://ignite-call.vercel.app",
          siteName: "Ignite Call",
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
