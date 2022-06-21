import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FaChevronLeft } from "react-icons/fa";
import { GET_PROJECT } from "../apollo/queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });

  if (error) return <p>Something went wrong</p>;
  if (loading) return <Spinner height="80vh" />;

  return (
    <>
      {!error && !loading && (
        <div className="mx-auto card p-2 p-md-5 mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" className="text-dark">
              <FaChevronLeft size="1.5em" />
            </Link>

            <DeleteProjectButton projectId={id} />
          </div>
          <div className="w-100">
            <h1>{data.project.name}</h1>
            <div className="d-flex align-items-center">
              <div
                className={`status-indicator me-2 ${
                  data.project.status === "Completed"
                    ? "project-completed"
                    : data.project.status === "On Progress"
                    ? "project-ongoing"
                    : "project-notstarted"
                }`}
              ></div>
              <span className="fw-semibold">{data.project.status}</span>
            </div>
            <p className="lead">{data.project.description}</p>

            <ClientInfo client={data.project.client} />

            <EditProjectForm project={data.project} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
