import styles from "./HeroBanner.module.scss";

interface IHeroBannerProps {
  heroImage: string;
  name: string;
  title?: string;
  designCredits?: string[];
}

function HeroBanner(props: IHeroBannerProps) {
  const { heroImage, name, title, designCredits } = props;

  return (
    <div
      className={styles.heroBanner}
      data-aos="fade-up"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.name}>{name}</h1>
          {title && <p className={styles.title}>{title}</p>}
          {designCredits && designCredits.length > 0 && (
            <p className={styles.designCredits}>
              Designed by: {designCredits.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
