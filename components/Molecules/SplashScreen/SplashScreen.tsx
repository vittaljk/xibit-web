import { FC, useState, useEffect } from "react";

import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  hasTimeout?: boolean;
  timeoutDuration?: number;
  logoSize?: number;
}

const SplashScreen: FC<SplashScreenProps> = ({
  hasTimeout = true,
  timeoutDuration = 3000,
  logoSize = 250,
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
    <>
      <div className={styles.splashScreenContainer}>
        <div className={styles.logoContainer}>
          <img
            alt="Logo"
            src="/images/xibit-logo-transparent.png"
            width="300"
          />
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
