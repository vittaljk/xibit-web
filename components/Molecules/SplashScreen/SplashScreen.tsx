import { FC, useState, useEffect } from "react";

import styles from "./SplashScreen.module.scss";

import { Logo } from "@/components/icons";

interface SplashScreenProps {
  hasTimeout?: boolean; // Optional boolean for timeout control
  timeoutDuration?: number; // Optional number for timeout duration in ms
  logoSize?: number; // Optional number for logo size
}

const SplashScreen: FC<SplashScreenProps> = ({
  hasTimeout = true,
  timeoutDuration = 2000,
  logoSize = 150,
}) => {
  const [isVisible, setIsVisible] = useState(hasTimeout);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, timeoutDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, timeoutDuration]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.splashScreenContainer}>
      <div className={styles.logoContainer}>
        <Logo size={logoSize} />
      </div>
    </div>
  );
};

export default SplashScreen;
