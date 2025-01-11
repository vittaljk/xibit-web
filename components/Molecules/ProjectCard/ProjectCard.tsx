import Link from "next/link";

import styles from "./ProjectCard.module.scss";

import { IProject } from "@/components/Templates/Project";

interface ProjectProps {
  project: IProject;
}

function ProjectCard(props: ProjectProps) {
  const {
    project: { id, heroImage, name, title, designCredits },
  } = props;

  return (
    <div data-aos="fade-up">
      <Link href={`/projects/${id}`}>
        <div className={styles.projectCard}>
          <div className={styles.heroImage}>
            <img alt={title || name} src={heroImage} />
          </div>
          <h2 className={styles.projectName}>{name}</h2>
          {title && <h3 className={styles.projectTitle}>{title}</h3>}
          {designCredits && designCredits.length > 0 && (
            <div className={styles.designCreditsContainer}>
              <p className={styles.designCreditsTitle}>Design Credits</p>
              <p className={styles.designCredits}>{designCredits.join(", ")}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
