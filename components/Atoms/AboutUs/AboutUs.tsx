import styles from "./AboutUs.module.scss";

function AboutUs() {
  return (
    // <div className="h1 text-pp-6 md:container md:mx-auto md:px-4 md:py-16">
    <div className={styles.aboutUsWrapper}>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <div className="mx-5 mt-9 md:mx-0">
        <div className="mb-4" data-aos="fade-up">
          At x'ibit, we believe every space has the potential to be transformed
          into a refined, inspiring environment. Driven by a commitment to
          excellence, we work with a network of skilled designers to bring your
          vision to life—creating interiors that are not only beautiful but
          crafted with purpose, precision, and attention to detail. Our approach
          is rooted in the idea that the best spaces are those that evolve
          thoughtfully from the outset, incorporating the needs and unique
          tastes of those who live in them.
        </div>
        <div className="mb-4" data-aos="fade-up">
          Every project we undertake is a partnership, where we carefully match
          you with a designer who understands your style and vision. From there,
          our team expertly handles the execution, managing every step of the
          process with flexibility, care, and a drive for perfection. Whether
          it’s sourcing premium materials or refining each detail to reflect the
          designer’s intent, we prioritize quality and adaptability, delivering
          results that surpass expectations.
        </div>
        <div className="mb-4" data-aos="fade-up">
          With x'ibit, you’re not just investing in a home makeover—you’re
          working with a team that’s dedicated to realizing a space that
          enhances your lifestyle and brings lasting satisfaction. Let us bring
          to life a home that embodies elegance, function, and the unique warmth
          that comes from thoughtful design and expert execution.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
