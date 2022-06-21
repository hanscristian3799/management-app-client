import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../apollo/queries/projectQueries";
import AddProjectModal from "./AddProjectModal";
import ProjectCard from "./ProjectCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Projects = () => {
  const { error, loading, data } = useQuery(GET_PROJECTS);

  if (error) return <p>Something went wrong</p>;
  if (loading)
    return (
      <div className="mb-3">
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <Skeleton count={3} height={30} />
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Skeleton count={3} height={30} />
          </div>
        </div>

        <div className="row mb-3 d-none d-md-flex">
          <div className="col-12 col-md-6">
            <Skeleton count={3} height={30} />
          </div>
          <div className="col-12 col-md-6">
            <Skeleton count={3} height={30} />
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Projects</h2>
        <AddProjectModal />
      </div>
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
