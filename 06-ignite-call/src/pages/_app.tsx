import "../lib/dayjs";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "@/styles/global";
import { DefaultSeo } from "next-seo";

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
            url: "https://www.ignite-call.rocketseat.com.br",
            siteName: "Ignite Call",
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
  );
}
