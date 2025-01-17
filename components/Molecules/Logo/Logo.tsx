import Link from "next/link";

import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <img alt="Logo" src="/images/xibit-logo-white.png" />
      </div>
    </Link>
  );
}

export default Logo;
