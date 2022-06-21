import { UPDATE_PROJECT } from "../apollo/mutations/projectMutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_PROJECTS } from "../apollo/queries/projectQueries";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return;
    }

    updateProject(name, description, status);
  };

  return (
    <div>
      <h4>Edit Project</h4>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">On Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-warning d-flex ms-auto fw-semibold text-light"
        >
          Edit Project
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
