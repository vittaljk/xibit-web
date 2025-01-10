import { useRouter } from "next/router";

import { projects } from "@/data";
import { IProject } from "@/components/Templates/Project";
import * as Templates from "@/components/Templates";

const ProjectPage = (props: { project: IProject }) => {
  const { project } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Templates.Layout>
      <Templates.Project project={project} />
    </Templates.Layout>
  );
};

export async function getStaticPaths() {
  // Fetch all project IDs (or slugs) to pre-render pages
  // const projects = await fetch('https://api.example.com/projects').then(res => res.json());

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() }, // Match the `id` in [id].js
  }));

  return { paths, fallback: true }; // fallback: true enables on-demand generation
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Fetch data for the project based on the ID
  const project = projects.find((p) => p.id === params.id);

  return { props: { project } };
}

export default ProjectPage;
