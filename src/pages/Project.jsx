import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
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
  if (loading) return <Spinner />;

  return (
    <>
      {!error && !loading && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p className="lead">{data.project.description}</p>
          <h5>Status: {data.project.status}</h5>

          <ClientInfo client={data.project.client} />

          <DeleteProjectButton projectId={id} />

          <EditProjectForm project={data.project} />
        </div>
      )}
    </>
  );
};

export default Project;
