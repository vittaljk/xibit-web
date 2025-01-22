import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ReactNode } from "react";

import { Head } from "../head";

import styles from "./Layout.module.scss";

import * as Organisms from "@/components/Organisms";
import { SplashScreen } from "@/components/Molecules";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  const [isStage, setIsStage] = useState(false);

  useEffect(() => {
    // TODO: remove this when the site is live
    const isStageUrl = window.location.href.includes("xibit-homes");

    setIsStage(isStageUrl);
  }, []);

  return (
    <div
      className={styles.layoutContainer}
      style={{ display: isStage ? "block" : "none" }}
    >
      <Head pageTitle={pageTitle} />
      <SplashScreen />
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