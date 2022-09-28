import Head from "next/head";
import React from "react";
import { LayoutTypes } from "../../interfaces/general";

const Layout: React.FC<LayoutTypes> = ({ className, title, children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut-icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{`${title ?? "Denvato Social App"}`}</title>
      </Head>

      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
