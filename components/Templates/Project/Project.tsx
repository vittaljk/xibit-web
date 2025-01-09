import { IProject } from "@/data";

interface ProjectProps {
  project: IProject;
}

function Project(props: ProjectProps) {
  const { project } = props;

  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
}

export default Project;
