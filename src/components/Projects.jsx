import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../apollo/queries/projectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";

const Projects = () => {
  const { error, loading, data } = useQuery(GET_PROJECTS);

  if (error) return <p>Something went wrong</p>;
  if (loading) return <Spinner />;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mb-3">
          {data.projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};

export default Projects;
