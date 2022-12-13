import * as React from "react";

import { AppProps } from "next/app";

import { AppProvider } from "$core/contexts/appProvider";
import "$styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
