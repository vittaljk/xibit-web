import PropTypes from "prop-types";
import { ReactNode } from "react";

import { Head } from "../head";

import styles from "./Layout.module.scss";

import * as Organisms from "@/components/Organisms";
import * as Molecules from "@/components/Molecules";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <div
      className={styles.layoutContainer}
    >
      <Head pageTitle={pageTitle} />
      <Molecules.SplashScreen />
      <Organisms.Header />
      <div>
        <div>{children}</div>
        <Organisms.Footer />
      </div>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};