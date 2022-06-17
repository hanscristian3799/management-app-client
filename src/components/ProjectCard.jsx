const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6 my-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{project.name}</h5>
              <p className="card-subtitle mb-2">
                Status:{" "}
                <strong
                  className={
                    project.status === "Not Started"
                      ? "text-danger"
                      : project.status === "On Progress"
                      ? "text-warning"
                      : "text-success"
                  }
                >
                  {project.status}
                </strong>
              </p>
            </div>
            <a href={`/projects/${project.id}`} className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
