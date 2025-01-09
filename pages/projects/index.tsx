import * as Templates from "@/components/Templates";
import * as Organisms from "@/components/Organisms";

const ProjectsList = () => {
  return (
    <Templates.Layout>
      {/* TODO: move this is projects, need it in home screen as well */}
      {/* {projects.map((project) => (
        <div key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <p>{project.title}</p>
          </Link>
        </div>
      ))} */}
      <Organisms.Projects />
    </Templates.Layout>
  );
};

export default ProjectsList;
