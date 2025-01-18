import styles from "./AboutUs.module.scss";
import { aboutUsDetails } from "./AboutUs.model";

function AboutUs() {
  return (
    <div className={styles.aboutUsWrapper}>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <div className="mx-5 mt-9 md:mx-0">
        {aboutUsDetails.map((detail) => (
          <div key={detail.id} className="mb-4" data-aos="fade-up">
            {detail.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
