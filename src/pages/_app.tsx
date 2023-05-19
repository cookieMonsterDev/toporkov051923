"use client"
import { globalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { ReactElement } from "react";
import { NextPage } from "next";
import { NavBar } from "@/components/NavBar";
import { navBarTabs } from "@/navbar-tabs";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
        <Global styles={globalStyle} />
        <NavBar tabs={...navBarTabs}/>
        <Component {...pageProps} />
    </>
  );
}
