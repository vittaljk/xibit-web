import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img alt="Logo" src="/images/logo.jpeg" />
    </div>
  );
}

export default Logo;
