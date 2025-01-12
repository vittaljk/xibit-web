import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img alt="Logo" src="/images/xibit-logo-white.png" />
    </div>
  );
}

export default Logo;
